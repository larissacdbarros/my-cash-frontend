import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/components/models/Receita';

@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css']
})
export class ReceitalistComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;


  constructor() { }

  ngOnInit(): void {


  }

}
