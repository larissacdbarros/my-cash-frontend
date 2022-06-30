import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Receita } from '../../models/Receita';
import { CartaocreditoComponent } from '../cartaocredito/cartaocredito.component';
import { DespesaComponent } from '../despesa/despesa.component';
import { ReceitaComponent } from '../receita/receita.component';
import { ReceitalistComponent } from '../receita/receitalist/receitalist.component';
import { DespesalistComponent } from '../despesa/despesalist/despesalist.component';
import { CartaocreditolistComponent } from '../cartaocredito/cartaocreditolist/cartaocreditolist.component';
import { ReceitaService } from '../../sevices/receita.service';
import { DespesaCartaoComponent } from '../despesaCartao/despesaCartao.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  saldoAtual: Number;
  saldoReceitas : Number;
  saldodespesas : Number;
  faturaCartao : Number;

   public receitas: Receita[];

  exibirLista1 = false;
  exibirLista2 = false;
  exibirLista3 = false;


  constructor(private receita : MatDialog, private despesa : MatDialog,
              private cartaocredito : MatDialog,

              private receitaService: ReceitaService)  {



   }
  openDialogAdicionarReceita() {
    this.receita.open(ReceitaComponent);

  }

  openDialog2() {
    this.despesa.open(DespesaComponent);
  }

  openDialogAdicionarDespesaCartao() {
    this.cartaocredito.open(DespesaCartaoComponent);
  }

  mostrarLista1() {
    this.exibirLista1 = !this.exibirLista1;
  }

  mostrarLista2() {
    this.exibirLista2 = !this.exibirLista2;
  }
  listarDespesaCartao() {
    this.exibirLista3 = !this.exibirLista3;
  }

  ngOnInit(): void {
  }



}


