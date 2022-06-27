import { Component, OnInit } from '@angular/core';
import { ReceitaComponent } from '../receita/receita.component';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';




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

  constructor(private receita : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.receita.open(ReceitaComponent, {
      width: '50%'
    });
  }

}
