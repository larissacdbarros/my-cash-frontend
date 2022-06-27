import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

  constructor(private receita  : MatDialog) {

   }
  openDialog1() {
    this.receita.open(ReceitaComponent, {
      width:'50%'
    });
  }

  openDialog2() {
    this.despesa.open(ReceitaComponent, {
      width:'50%'
    });
  }

  ngOnInit(): void {
  }



}
