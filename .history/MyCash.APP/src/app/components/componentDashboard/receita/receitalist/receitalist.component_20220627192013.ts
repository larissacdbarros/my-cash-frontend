import { Component, OnInit } from '@angular/core';
i


@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css']
})
export class ReceitalistComponent implements OnInit {

  formulario: any;
  tituloFormulario: string;

  visibilidadeTabela: boolean = true;
  constructor() { }

  ngOnInit(): void {


  }

}
