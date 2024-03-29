import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from './core/model/login-dto';
import { Injectable } from '@angular/core';
import { Colaborador } from './core/model/colaborador';
import { TokenDTO } from './core/model/token-dto';
import { PassMatches } from './core/model/pass-matches';
import { RequestLancamento } from './core/model/request-lancamento';
import { Lancamento } from './core/model/lancamento';
import { MeusLancamentosConcatenados } from './core/model/meus-lancamentos-concatenados';
import { LancamentosConcatenados } from './core/model/lancamentos-concatenados';



@Injectable({
    providedIn: 'root'
})
export class HttpService {


    constructor(
        private http: HttpClient
    ) { }


    //url: string = 'http://localhost:8080/pontoeletronico'
    url: string = 'https://solidtechsolutions.com.br/pontoeletronico/api'

    login(loginDTO: LoginDTO): Observable<any> {
        return this.http.post<any>(this.url + '/login', loginDTO)
    }

    getByUsername(token: TokenDTO): Observable<any> {
        return this.http.post<Colaborador>(this.url + "/colaborador/username", token)
    }

    matchPass(passMatches: PassMatches): Observable<any> {
        return this.http.post<boolean>(this.url + "/colaborador/matchPass", passMatches)
    }

    setNewPass(colaborador: Colaborador): Observable<any> {
        return this.http.put<Colaborador>(this.url + "/colaborador/setNewPass/" + colaborador.cdColaborador, colaborador)
    }

    getAllColaboradores(): Observable<Colaborador[]> {
        return this.http.get<Colaborador[]>(this.url + "/colaborador/all")
    }

    desativarColaborador(cdColaborador: string) {
        return this.http.delete(this.url + "/colaborador/desativar/" + cdColaborador)
    }

    addColaborador(colaborador: Colaborador): Observable<Colaborador> {
        return this.http.post<Colaborador>(this.url + '/colaborador', colaborador)
    }

    getColaboradorById(id: string): Observable<Colaborador> {
        return this.http.get<Colaborador>(this.url + "/colaborador/" + id)
    }

  


    postLancamento(lancamento:RequestLancamento): Observable<Lancamento>{
        return this.http.post<Lancamento>(this.url + "/lancamentos", lancamento)
    }
    getLancamentosOfColaborador():Observable<Lancamento[]>{
        return this.http.get<Lancamento[]>(this.url + "/lancamentos/colaborador")
    }

    getMeusLancamentosConcatenados(): Observable<MeusLancamentosConcatenados[]>{
        return this.http.get<MeusLancamentosConcatenados[]>(this.url+"/lancamentos/getMeusLancamentosConcatenados")
    }

    getAllLancamentos() : Observable<LancamentosConcatenados[]>{
        return this.http.get<LancamentosConcatenados[]>(this.url+"/lancamentos")
    }

}