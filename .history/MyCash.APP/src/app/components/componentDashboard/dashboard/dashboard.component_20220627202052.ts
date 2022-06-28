import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Receita } from '../../models/Receita';
import { CartaocreditoComponent } from '../cartaocredito/cartaocredito.component';
import { DespesaComponent } from '../despesa/despesa.component';
import { ReceitaComponent } from '../receita/receita.component';
import { ReceitalistComponent } from '../receita/receitalist/receitalist.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  saldoAtual = "inserir aqui ";
  receitas = "inserir aqui ";
  despesas = "inserir aqui ";
  faturaCartao = "inserir aqui "

  exibirLista = false;

  constructor(private receita : MatDialog, private despesa : MatDialog, private cartaocredito : MatDialog)  {



   }
  openDialog1() {
    this.receita.open(ReceitaComponent);
  }

  openDialog2() {
    this.despesa.open(DespesaComponent);
  }

  openDialog3() {
    this.cartaocredito.open(CartaocreditoComponent);
  }

  mostrarLista1() {
    this.exibirLista1 = !this.exibirLista1;
  }




  ngOnInit(): void {
  }



}


