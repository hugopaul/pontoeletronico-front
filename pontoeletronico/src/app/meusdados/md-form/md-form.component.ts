import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/core/model/colaborador';
import { PassMatches } from 'src/app/core/model/pass-matches';
import { TokenDTO } from 'src/app/core/model/token-dto';
import { TokenService } from 'src/app/core/service/token.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit{

  msgSucesso!:boolean;
  msgfalha!:boolean;
  msgNewPassSucesso!:boolean;
  msgNewPassfalha!:boolean;
  msgMatchNewPasswordsSucesso!:boolean;
  msgMatchNewPasswordsfalha!:boolean;

  errors!:string;

  perfis:string="";

  velhaSenha:string="";
  novaSenha:string="";
  novaSenhaRepetida:string="";
  

  colaborador!: Colaborador;// = new Colaborador();

  constructor(
    private router : Router,
    private http : HttpService,
    private tokenService : TokenService
     ) { }

  ngOnInit(): void {
   this.http.getByUsername(this.tokenService.generate()).subscribe(
      succes => {
        this.colaborador = succes
        for(let perfil of this.colaborador.perfis){
              if(perfil.nmPerfil != "undefined"){
                this.perfis = perfil.nmPerfil + " " + this.perfis;
              }
        }
      },
      error => {
        this.msgfalha = error.message;
        this.colaborador = new Colaborador();
      }
    )
  }

  matchPass(event : any){
      let passmatches: PassMatches = new PassMatches();
      passmatches.encryptedPass = this.colaborador.password;
      passmatches.passToMatch = this.velhaSenha;
      this.http.matchPass(passmatches).subscribe(
        success => {
          if(success == true) {
            this.msgNewPassSucesso = true;
          }else{
          }
        },
        error => {
           console.log(error)
        }
      )
  }
  salvarNovaSenha(){
    this.colaborador.password = this.novaSenha;
    this.http.setNewPass(this.colaborador).subscribe(
      success => {
        this.msgSucesso = true
        this.colaborador = success;
        this.clearPassFields()
      },
      error => {
        this.msgfalha = true;
        this.clearPassFields()
      }
    )
  

  }
  semePasswords(event : any){

    if(this.novaSenha === this.novaSenhaRepetida){
      this.msgMatchNewPasswordsSucesso =true;
      this.msgMatchNewPasswordsfalha = false;
    }else{
      this.msgMatchNewPasswordsfalha = true;
      this.msgMatchNewPasswordsSucesso =false;
    }
  }
  clearPassFields(){
    this.velhaSenha="";
    this.novaSenha="";
    this.novaSenhaRepetida="";
    this.msgMatchNewPasswordsSucesso = false;
    this.msgMatchNewPasswordsfalha =false;
    this.msgNewPassSucesso = false;
  }

  onSubmit(){

  }

}
