import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Lancamento } from 'src/app/core/model/lancamento';
import { RequestLancamento } from 'src/app/core/model/request-lancamento';
import { TokenService } from 'src/app/core/service/token.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  sinalSucesso!: boolean;
  sinalFalha!: boolean;
  lancamento!: Lancamento;

  iFrameUri!: URL;

  latitude: string = "";
  longitude: string = "";
  timestamp: string = "";

  lancamentos!: Lancamento[];

  requestLancamento!: RequestLancamento;
  constructor(
    private tokenService: TokenService,
    private http: HttpService,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
    this.requestLancamento = this.preparaLancamento();

    this.getUltimosRegistros();
  }

  loadPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

      }, error => {
        console.log("geoloclização desativada")
        alert("ATIVE A LOCALIZAÇÃO DO SEU NAVEGADOR!")
        setTimeout(function () {
          window.location.reload();
        }, 4000);

      })
    }
  }

  verificarTipoEsperado(value: any) {
    if (value == null || value == undefined) {
      return ""
    } else {
      return value.toString();
    }


  }

  onSubmit() {
    this.requestLancamento = this.preparaLancamento();

    if (this.requestLancamento.latitude != null || this.requestLancamento.latitude != "") {
      this.http.postLancamento(this.requestLancamento).subscribe(
        success => {
          this.lancamento = success;
          this.sinalSucesso = true
          this.getUltimosRegistros();

        }, error => {
          this.sinalFalha = true
          this.sinalSucesso = false
        })
    } else {
      console.log("Send geolocation error!")
    }

  }

  preparaLancamento() {
    var requestLancamento = new RequestLancamento();
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      this.latitude = this.verificarTipoEsperado(position.coords.latitude);
      this.longitude = this.verificarTipoEsperado(position.coords.longitude);
      this.timestamp = this.verificarTipoEsperado(position.timestamp);

    }, error => {
      console.log("Erro in get geolocation")
    });
    requestLancamento.latitude = this.latitude
    requestLancamento.longitude = this.longitude
    requestLancamento.timestamp = this.timestamp
    return requestLancamento;
  }

  getUltimosRegistros() {
    setTimeout(function () {

    }, 5000);

    this.http.getLancamentosOfColaborador().subscribe(
      success => { this.lancamentos = success },
      error => { console.log("Get lancamentos error") }
    );


  }
  getLocalizationSRC() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyAnPU51TGj7Ce6aqD7fcmctkzgb4M8W5xo&center=-15.9973376,-48.0509952&q=-15.9973376,-48.0509952");


  }

  // Configuração da ordenação
  key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}