import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colaborador } from 'src/app/core/model/colaborador';
import { PassMatches } from 'src/app/core/model/pass-matches';
import { Perfil } from 'src/app/core/model/perfil';
import { TokenService } from 'src/app/core/service/token.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-col-form',
  templateUrl: './col-form.component.html',
  styleUrls: ['./col-form.component.css']
})
export class ColFormComponent implements OnInit {
  msgSucesso!: boolean;
  msgfalha!: boolean;

  user: boolean = false;
  gerente: boolean = false;
  proprietario: boolean= false;

  id!:string;

  errors!: string;

  colaborador!: Colaborador;

  constructor(
    private http: HttpService,
    private router: Router,
    private acttivatedRouter : ActivatedRoute

  ) {
    this.colaborador = new Colaborador();

  }

  ngOnInit(): void {
    let params : Observable<Params> = this.acttivatedRouter.params;
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.http.getColaboradorById(this.id).subscribe( 
          response =>{ 
            this.colaborador = response
            this.verificadorDosPerfis(this.colaborador);
          }
         ,errorResponse => this.colaborador = new Colaborador())
      }
    })
  };

  onSubmit() {
    this.colaborador.perfis = [];
    if (this.user) {
      let user = new Perfil();
      user.cdPerfil = "c30bdcaa-e445-11ec-8fea-0242ac000001"
      user.nmPerfil = "USER"
      this.colaborador.perfis.push(user);
    }
    if (this.gerente) {
      let gerente = new Perfil();
      gerente.cdPerfil = "c30bdcaa-e445-11ec-8fea-0242ac000002"
      gerente.nmPerfil = "GERENTE"
      this.colaborador.perfis.push(gerente);
    }
    if (this.proprietario) {
      let proprietario = new Perfil();
      proprietario.cdPerfil = "c30bdcaa-e445-11ec-8fea-0242ac000015"
      proprietario.nmPerfil = "PROPRIETARIO"
      this.colaborador.perfis.push(proprietario);
    }

    this.http.addColaborador(this.colaborador).subscribe(
      success => {
          this.msgSucesso = true;
          this.colaborador = success;
      }, 
       error => {
          this.msgfalha = true;
          this.msgSucesso = false;
       }
    )
   
  }


  userCheck(){
    this.user = !this.user;
  }
  gerenteCheck(){
    this.gerente = !this.gerente;
  }
  proprietarioCheck(){
    this.proprietario = !this.proprietario;
  }

  verificadorDosPerfis(col:Colaborador){
      for(let perfil of col.perfis){
        if(perfil.nmPerfil == "PROPRIETARIO"){
          this.proprietario = !this.proprietario
        }
        if(perfil.nmPerfil == "GERENTE"){
          this.gerente = !this.gerente 
        }
        if(perfil.nmPerfil == "USER"){
          this.user = !this.user
        }
      }
  }
}
