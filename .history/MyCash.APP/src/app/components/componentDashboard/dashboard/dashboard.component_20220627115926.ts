import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Receita } from '../../models/Receita';
import { CartaocreditoComponent } from '../cartaocredito/cartaocredito.component';
import { DespesaComponent } from '../despesa/despesa.component';
import { ReceitaComponent } from '../receita/receita.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  saldoAtual = "inserir aqui ";
  receitas = "inserir aqui ";
  despesas = "inserir aqui ";
  faturaCartao = "inserir aqui ";

  constructor(private receita : MatDialog, private despesa : MatDialog, private cartaocredito : MatDialog)  {


   }
  openDialog1() {
    this.receita.open(ReceitaComponent, {
     width:'40%',
      height:'0%'
    });
  }

  openDialog2() {
    this.despesa.open(DespesaComponent, {
     width:'40%',
      height:'40%'
    });
  }

  openDialog3() {
    this.cartaocredito.open(CartaocreditoComponent, {
     width:'40%',
      height:'40%'
    });
  }


  ngOnInit(): void {
  }



}
