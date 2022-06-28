import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteComponent } from './components/componentSite/site/site.component';
import { LoginComponent } from './components/componentSite/login/login.component';

import { CadastroComponent } from './components/componentSite/cadastro/cadastro.component';
import { DashboardComponent } from './components/componentDashboard/dashboard/dashboard.component';
import { ReceitaComponent } from './components/componentDashboard/receita/receita.component';
import { DespesaComponent } from './components/componentDashboard/despesa/despesa.component';
import { CartaocreditoComponent } from './components/componentDashboard/cartaocredito/cartaocredito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent,
    ReceitaComponent,
    DespesaComponent,
    CartaocreditoComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
