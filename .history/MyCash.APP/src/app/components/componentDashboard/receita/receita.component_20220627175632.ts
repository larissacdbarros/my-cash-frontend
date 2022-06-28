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

  isSubcategoriaDisable : boolean = true;

  constructor(private receitaService: ReceitaService, 
              private categoriaReceitaService: CategoriaReceitaService,
              private subcategoriaReceitaService : SubcategoriaReceitaService
              ) { }

  ngOnInit() {
   this.carregarCategoria();
   this..controls['name'].disable();
  }
  
  carregarCategoria(){
    this.categoriaReceitaService.GetAll().subscribe(resultado => {
      this.categorias = resultado;
    });
    console.log(this.formulario.get('categoria').value);
    console.log(this.isSubcategoriaDisable);
  }

  carregarSubcategoria(event: Event){
    

    if(this.formulario.get('categoria').value != ''){
      this.isSubcategoriaDisable = false;
      this.subcategoriaReceitaService.GetAll().subscribe(resultado => {
        this.subcategorias = resultado;
      });
    }else{
      this.isSubcategoriaDisable = true;
      this.subcategorias = [];
    }
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
