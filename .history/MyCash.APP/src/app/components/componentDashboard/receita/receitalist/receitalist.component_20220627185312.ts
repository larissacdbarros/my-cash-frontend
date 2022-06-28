import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css']
})
export class ReceitalistComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;
  pessoas: Receita[]

  constructor() { }

  ngOnInit(): void {


  }

}
