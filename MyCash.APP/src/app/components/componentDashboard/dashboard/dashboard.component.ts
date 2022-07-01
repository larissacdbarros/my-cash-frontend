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
  saldoDespesas : Number;
  faturaCartao : Number;

   public receitas: Receita[];

   exibirLista1!: boolean
   exibirLista2!: boolean
   exibirLista3!: boolean


  constructor(private receita : MatDialog, private despesa : MatDialog,
              private cartaocredito : MatDialog,

              private receitaService: ReceitaService)  {



   }
  openDialogAdicionarReceita() {
    this.receita.open(ReceitaComponent);

  }

  openDialogAdicionarDespesaConta() {
    this.despesa.open(DespesaComponent);
  }

  openDialogAdicionarDespesaCartao() {
    this.cartaocredito.open(DespesaCartaoComponent);
  }

  mostrarLista1() {
    this.exibirLista1 = true
    this.exibirLista2 = false
    this.exibirLista3 = false
  }

  listarDespesaConta() {
    this.exibirLista2 = true
    this.exibirLista1 = false
    this.exibirLista3 = false
  }
  listarDespesaCartao() {
    this.exibirLista3 = true
    this.exibirLista1 = false
    this.exibirLista2 = false
  }


  ngOnInit(): void{
    this.exibirLista1 = false
    this.exibirLista2 = false
    this.exibirLista3 = false
  }


}


