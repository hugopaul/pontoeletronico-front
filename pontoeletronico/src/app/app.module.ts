import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { LoginComponent } from './pages/login/login.component';
import { TemplateModule } from './pages/template/template.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MeusdadosModule } from './pages/meusdados/meusdados.module';
import { InterceptorInterceptor } from './core/interceptor/interceptor.interceptor';
import { TokenService } from './core/service/token.service';
import { ColaboradoresModule } from './pages/colaboradores/colaboradores.module';
import { PontoModule } from './pages/ponto/ponto.module';
import { SafePipe } from './core/safe.pipe';
import { MeuslancamentosModule } from './pages/meuslancamentos/meuslancamentos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent, 
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MeusdadosModule,
    ColaboradoresModule, 
    PontoModule,
    MeuslancamentosModule
  ],
  providers: [HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true },
          TokenService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
