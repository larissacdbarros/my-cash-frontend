import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { resourceUsage } from 'process';
import { CategoriaReceita } from '../../models/CategoriaReceita';
import { Receita } from '../../models/Receita';
import { SubcategoriaReceita } from '../../models/SubcategoriaReceita';
import { ReceitaService } from './receita.service';



@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  formulario: any;
  public receitas: Receita[];
  public categorias: CategoriaReceita[];
  public subcategorias: SubcategoriaReceita[];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.CarregarReceitas();
  }

  //get all
  CarregarReceitas(){
    this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }

  CarrregarCategorias(){
    this.receitaService.GetAll().subscribe(resultado => {
      t
    })
  }

  CadastroReceita(): void{
    this.formulario = new  FormGroup({
      descricao: new FormControl(null)
    });
    const receita: Receita = this.formulario.value;
    this.receitaService.CreateReceita(receita).subscribe((resultado) =>{
        alert('Receita adicionada com sucesso')
    })
  }

  //getById
  



}
