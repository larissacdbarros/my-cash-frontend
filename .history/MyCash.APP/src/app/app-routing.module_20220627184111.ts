import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/componentSite/cadastro/cadastro.component';
import { DashboardComponent } from './components/componentDashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/componentSite/login/login.component';
import { SiteComponent } from './components/componentSite/site/site.component';
import { ReceitaComponent } from './components/componentDashboard/receita/receita.component';
import { DespesaComponent } from './components/componentDashboard/despesa/despesa.component';
import { CartaocreditoComponent } from './components/componentDashboard/cartaocredito/cartaocredito.component';

const routes: Routes = [

  {path: '', component: SiteComponent},
  {path: 'site', component: SiteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'receita', component: ReceitaComponent},
  {path: 'despesa', component: DespesaComponent},
  {path: 'cartaocredito', component: CartaocreditoComponent},
  {path: 'receita', component: CartaocreditoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
