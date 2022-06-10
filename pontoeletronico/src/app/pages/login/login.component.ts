import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpService } from '../../http.service';
import { LoginDTO } from '../../core/model/login-dto';
import { TokenDTO } from '../../core/model/token-dto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario!:string;
  password!: string;
  errors!: String[];

  constructor(
    private router : Router,
    private http : HttpService
    ) { }

  onSubmit(){
    let loginDTO : LoginDTO = new LoginDTO();
    loginDTO.usuario = this.usuario;
    loginDTO.password = this.password;
    this.http.login(loginDTO).subscribe(
      success => {
        if(success.status === 403){
          this.errors = ['Usuário e/ou senha incorretos']
        }else if(success.status === 200){}
        let token : TokenDTO = success;
        window.localStorage.setItem('Jwt', token.token);
        window.localStorage.setItem('username', token.type);
        this.router.navigate(['/home'])
    },
    error => {
      this.errors = ['Usuário e/ou senha incorretos']
    }
    )
     
    }
  

}
