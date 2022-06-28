import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoriaReceita } from '../../models/CategoriaReceita';
import { Conta } from '../../models/Conta';
import { Receita } from '../../models/Receita';
import { SubcategoriaReceita } from '../../models/SubcategoriaReceita';
import { CategoriaReceitaService } from '../../sevices/categoriaReceita.service';
import { ContaService } from '../../sevices/conta.service';
import { ReceitaService } from '../../sevices/receita.service';
import { SubcategoriaReceitaService } from '../../sevices/subcategoriaReceita.service';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  // formulario: FormGroup = new  FormGroup({
  //   categoria: new FormControl(''),
  //   subcategoriaReceitaId: new FormControl(''),
  //   descricao: new FormControl(''),
  //   valor:new FormControl(''),
  //   contaId: new FormControl(''),
  //   data: new FormControl('')
  // });

  formulario = this.fb.group({
    categoria: ['', Validators.required],
    subcategoriaReceitaId:['', Validators.required],
    descricao:['', Validators.required],
    valor: ['', Validators.required],
    contaId:['', Validators.required],
    data:['', Validators.required]
  });



  public receitas: Receita[];
  public categorias: CategoriaReceita[];
  public subcategorias: SubcategoriaReceita[];
  public contas: Conta[];

  public submitted



  constructor(private receitaService: ReceitaService,
              private categoriaReceitaService: CategoriaReceitaService,
              private subcategoriaReceitaService : SubcategoriaReceitaService,
              private contaService : ContaService,
              private fb: FormBuilder
              ) { }

  ngOnInit() {
   this.carregarCategoria();
   this.formulario.controls['subcategoriaReceitaId'].disable();
   this.carregarConta();
  }

  carregarCategoria(){
    this.categoriaReceitaService.GetAll().subscribe(resultado => {
      this.categorias = resultado;
    });
  }

  carregarConta(){
    this.contaService.GetAll().subscribe(resultado => {
      this.contas = resultado;
    });
  }

  carregarSubcategoria(event: Event){

    if(this.formulario.get('categoria').value != ''){
      this.formulario.controls['subcategoriaReceitaId'].enable();
      this.subcategoriaReceitaService.GetAll().subscribe(resultado => {
        this.subcategorias = resultado;
      });
    }else{
      this.formulario.controls['subcategoriaReceitaId'].setValue('');
      this.formulario.controls['subcategoriaReceitaId'].disable();
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

  cadastrar(): void{
    this.submitted = true;
    if(this.formulario.valid){
      const receita: Receita = this.formulario.value;
      this.receitaService.CreateReceita(receita).subscribe((resultado) =>{
        alert('Receita adicionada com sucesso');
    })

    }

  }

  get formularioControls() {
    return this.formulario.controls;
  }
  //getById




}
