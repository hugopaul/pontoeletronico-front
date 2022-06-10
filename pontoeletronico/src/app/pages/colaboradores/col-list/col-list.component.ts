import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/core/model/colaborador';
import { Perfil } from 'src/app/core/model/perfil';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-col-list',
  templateUrl: './col-list.component.html',
  styleUrls: ['./col-list.component.css']
})
export class ColListComponent implements OnInit {
  mensagemSucesso!: string;
  mensagemErro!: string;


  colaboradores!: Colaborador[];

  colaboradorSelect!: Colaborador;

  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.http.getAllColaboradores().subscribe(
      success => {
        this.colaboradores = success;
      },
      error => {
        this.mensagemErro = "Erro ao buscar colaboradores"
      }
    )
  }
  getPerfisOfCol(perfis : Perfil[]){
    
      let perfilOfCol :string = "";
      for (let perfil of perfis) {
        if (perfil.nmPerfil != "undefined") {
          perfilOfCol = perfil.nmPerfil + "  " + perfilOfCol;
        }
    }
    return perfilOfCol;

  }

  novoCadastro() {
    this.router.navigate(['/colaborador/form'])
  };

  preparaDelecao(col: Colaborador) {  
    this.colaboradorSelect = col;
  }
  desativarColaborador() {
    this.http.desativarColaborador(this.colaboradorSelect.cdColaborador).subscribe(
      success =>{
        this.mensagemSucesso = "Colaborador desativado com sucesso!"
      },
      error =>{
        this.mensagemErro = "Falha ao desativar colaborador!"
      }
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
