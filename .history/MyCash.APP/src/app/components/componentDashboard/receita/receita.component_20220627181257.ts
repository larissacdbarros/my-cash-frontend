import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoriaReceita } from '../../models/CategoriaReceita';
import { Receita } from '../../models/Receita';
import { SubcategoriaReceita } from '../../models/SubcategoriaReceita';
import { CategoriaReceitaService } from '../../sevices/categoriaReceita.service';
import { ReceitaService } from '../../sevices/receita.service';
import { SubcategoriaReceitaService } from '../../sevices/subcategoriaReceita.service';



@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  formulario: FormGroup = new  FormGroup({
    categoria: new FormControl(''),
    subcategoria: new FormControl(''),
    descricao: new FormControl(''),
    valor:new FormControl(''),
    conta: new FormControl(''),
    data: new FormControl('')
  });

  public receitas: Receita[];
  public categorias: CategoriaReceita[];
  public subcategorias: SubcategoriaReceita[];



  constructor(private receitaService: ReceitaService, 
              private categoriaReceitaService: CategoriaReceitaService,
              private subcategoriaReceitaService : SubcategoriaReceitaService
              ) { }

  ngOnInit() {
   this.carregarCategoria();
   this.formulario.controls['subcategoria'].disable();
  }
  
  carregarCategoria(){
    this.categoriaReceitaService.GetAll().subscribe(resultado => {
      this.categorias = resultado;
    });
    
  }

  carregarSubcategoria(event: Event){
    
    if(this.formulario.get('categoria').value != ''){
      this.formulario.controls['subcategoria'].enable();
      this.subcategoriaReceitaService.GetAll().subscribe(resultado => {
        this.subcategorias = resultado;
      });
    }else{
      this.formulario.controls['subcategoria'].setValue('');
      this.formulario.controls['subcategoria'].disable();
      this.subcategorias = [];
    }
    console.log(this.formulario.get('subcategoria').value);
  }

  //get all
  CarregarReceitas(){
    this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }

  cadastrar(): void{
    if(this.formulario.valid){
      const receita: Receita = this.formulario.value;
      this.receitaService.CreateReceita(receita).subscribe((resultado) =>{
        alert('Receita adicionada com sucesso');
    })

    }
    
  }

  //getById
  



}
