import { Component, OnInit } from '@angular/core';
import { LancamentosConcatenados } from 'src/app/core/model/lancamentos-concatenados';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  mensagemSucesso!:boolean;
  mensagemErro!:boolean;

  lancamentosConcatenados! : any;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.http.getAllLancamentos().subscribe(
      success => {this.lancamentosConcatenados = success},
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
