import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReceitalistComponent } from './components/componentDashboard/receita/receitalist/receitalist.component';
import { CartaocreditolistComponent } from './components/componentDashboard/cartaocredito/cartaocreditolist/cartaocreditolist.component';
import { DespesalistComponent } from './components/componentDashboard/despesa/despesalist/despesalist.component';
import { UsuarioService } from './components/componentSite/cadastro/usuario.service';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DespesadetalhesComponent } from './components/componentDashboard/despesa/despesadetalhes/despesadetalhes.component';
import { DespesadeleteComponent } from './components/componentDashboard/despesa/despesadelete/despesadelete.component';

import { DespesaCartaoComponent } from './components/componentDashboard/despesaCartao/despesaCartao.component';
import { DespesaCartaoListComponent } from './components/componentDashboard/despesaCartao/despesaCartaoList/despesaCartaoList.component';
import { DespesaCartaoDeleteComponent } from './components/componentDashboard/despesaCartao/DespesaCartaoDelete/DespesaCartaoDelete.component';
import { DespesaCartaoDetalhesComponent } from './components/componentDashboard/despesaCartao/despesaCartaoDetalhes/despesaCartaoDetalhes.component';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import {MatFormFieldModule} from '@angular/material/form-field';





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
    ReceitalistComponent,
    CartaocreditolistComponent,
    DespesalistComponent,
    DespesaCartaoComponent,
    DespesaCartaoListComponent,
    DespesaCartaoDetalhesComponent,
    DespesaCartaoDeleteComponent,
    DespesadetalhesComponent,
    DespesadeleteComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
   



  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
