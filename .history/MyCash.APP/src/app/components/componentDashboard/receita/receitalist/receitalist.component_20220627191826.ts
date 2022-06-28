import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css']
})
export class ReceitalistComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;

  C: boolean = true;
  constructor() { }

  ngOnInit(): void {


  }

}
