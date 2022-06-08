import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from './core/model/login-dto';
import { Injectable } from '@angular/core';
import { Colaborador } from './core/model/colaborador';
import { TokenDTO } from './core/model/token-dto';
import { PassMatches } from './core/model/pass-matches';



@Injectable({
    providedIn: 'root'
})
export class HttpService {


    constructor(
        private http: HttpClient
    ) { }


    url: string = 'http://localhost:8080'

    login(loginDTO: LoginDTO) : Observable<any>{
        return this.http.post<any>(this.url + '/login', loginDTO)
      }

    getByUsername(token : TokenDTO): Observable<any>{
        return this.http.post<Colaborador>(this.url + "/colaborador/username", token)
    }

    matchPass(passMatches : PassMatches) : Observable<any>{
        return this.http.post<boolean>(this.url + "/colaborador/matchPass", passMatches)
    }

    setNewPass(colaborador : Colaborador) : Observable<any>{
        return this.http.put<Colaborador>(this.url + "/colaborador/setNewPass/" + colaborador.cdColaborador, colaborador)
    }
}