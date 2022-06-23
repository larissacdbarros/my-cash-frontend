import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  saldoAtual = "inserir aqui ";
  receita = "inserir aqui ";
  despesas = "inserir aqui ";

  constructor() { }

  ngOnInit(): void {
  }

}
