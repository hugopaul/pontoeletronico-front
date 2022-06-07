import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from './core/model/login-dto';
import { TokenDTO } from './core/model/token-dto';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class HttpService {


    constructor(
        private http: HttpClient
    ) { }


    url: string = 'http://localhost:8080'

    login(loginDTO: LoginDTO) : Observable<any>{
        return this.http.post<TokenDTO>(this.url + '/login', loginDTO)
      }



}