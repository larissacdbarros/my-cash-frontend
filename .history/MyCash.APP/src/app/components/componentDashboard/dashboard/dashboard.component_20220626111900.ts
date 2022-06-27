import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



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

  constructor(private dialog : Mat) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });

}
}
