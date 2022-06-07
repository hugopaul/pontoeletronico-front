import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { LoginDTO } from '../core/model/login-dto';


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
    },
    error => {
      if(error.status === 403){
        this.errors = ['Usuário e/ou senha incorretos']
      }else if(error.status === 200){}
      window.localStorage.setItem('Jwt', error.error.text)
      this.router.navigate(['/home'])
    }
    )
     
    }
  

}
