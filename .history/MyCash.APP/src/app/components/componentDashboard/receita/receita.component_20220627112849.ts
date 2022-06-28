import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Receita } from '../../models/Receita';
import { ReceitaService } from './receita.service';



@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  formulario: any;
  public receitas: Receita[];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.carregarReceitas();
  }

  //get all
  carregarReceitas(){
    this.receitaService.getAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }

  cadastroReceita(): void{
    const recei
      this.formulario = new FormGroup({
        descricao: new FormControl(null),
        subcategoria: new FormControl(null),
        conta: new FormControl(null),
        data: new FormControl(null)
      })
  }

  //getById
  



}
