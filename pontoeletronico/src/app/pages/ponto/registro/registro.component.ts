import { Component, OnInit } from '@angular/core';
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

  requestLancamento!: RequestLancamento;

  constructor(
    private tokenService: TokenService,
    private http: HttpService
  ) { }

  ngOnInit(): void {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
      }, error => {
        console.log("geoloclização desativada")
        alert("ATIVE A LOCALIZAÇÃO DO SEU NAVEGADOR!")
        setTimeout(function () {
          window.location.reload();
        }, 4000);

      })
    }
    this.getUltimosRegistros();
  }

  onSubmit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.requestLancamento.geolocationPosition.coords = position.coords;
      this.requestLancamento.geolocationPosition.timestamp = position.timestamp;
    })
    this.http.postLancamento(this.requestLancamento).subscribe(
      success => {
        this.sinalSucesso = true
      }, error => {
        this.sinalFalha = true
        this.sinalSucesso = false
      })
  }

  getUltimosRegistros() {

  }

}