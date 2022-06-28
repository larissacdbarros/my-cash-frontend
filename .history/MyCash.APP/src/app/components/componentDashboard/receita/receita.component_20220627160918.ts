import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoriaReceita } from '../../models/CategoriaReceita';
import { Receita } from '../../models/Receita';
import { SubcategoriaReceita } from '../../models/SubcategoriaReceita';
import { ReceitaService } from '../../sevices/receita.service';



@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  formulario: FormGroup = new  FormGroup({
    categoria: new FormControl(null),
    subcategorias: new FormControl(null),
    descricao: new FormControl(null),
    valor:new FormControl(null),
    conta: new FormControl(null),
    data: new FormControl(null)
  });

  public receitas: Receita[];
  public categorias: CategoriaReceita[];
  public subcategorias: SubcategoriaReceita[];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    carregarCategoria();
  }
  
  carregarCategoria(){
    this.
  }

  //get all
  CarregarReceitas(){
    this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }

  CadastroReceita(): void{
    const receita: Receita = this.formulario.value;
    this.receitaService.CreateReceita(receita).subscribe((resultado) =>{
        alert('Receita adicionada com sucesso');
    })
  }

  //getById
  



}
