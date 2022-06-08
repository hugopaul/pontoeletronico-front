import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { LoginComponent } from './login/login.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MeusdadosModule } from './meusdados/meusdados.module';
import { InterceptorInterceptor } from './core/interceptor/interceptor.interceptor';
import { TokenService } from './core/service/token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MeusdadosModule
  ],
  providers: [HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true },
          TokenService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
