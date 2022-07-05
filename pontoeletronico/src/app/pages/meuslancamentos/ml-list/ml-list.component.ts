import { Component, OnInit } from '@angular/core';
import { MeusLancamentosConcatenados } from 'src/app/core/model/meus-lancamentos-concatenados';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-ml-list',
  templateUrl: './ml-list.component.html',
  styleUrls: ['./ml-list.component.css']
})
export class MlListComponent implements OnInit {

  mensagemSucesso!:boolean;
  mensagemErro!:boolean;


  meusLancamentosConcatenados!:any;

  constructor(
      private http: HttpService
  ) { }

  ngOnInit(): void {
    this.http.getMeusLancamentosConcatenados().subscribe(
      success => {this.meusLancamentosConcatenados = success},
      error => {}
      
    )
  }





    // Configuração da ordenação
    key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
    reverse: boolean = false;
    sort(key: any) {
      this.key = key;
      this.reverse = !this.reverse;
    }

}
