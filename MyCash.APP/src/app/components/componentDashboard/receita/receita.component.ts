import { Component, Inject, OnInit } from '@angular/core';
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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {


  formulario = this.fb.group({
    receitaId: [null],
    categoria: ['', Validators.required],
    subcategoriaReceitaId:['', Validators.required],
    descricao:['', Validators.required],
    valor: ['', Validators.required],
    contaId:['', Validators.required],
    data:['', Validators.required]
  });




  public categorias: CategoriaReceita[];
  public subcategorias: SubcategoriaReceita[];
  public contas: Conta[];

  public submitted = false;
  public titulo: string;



  constructor(private receitaService: ReceitaService,
              private categoriaReceitaService: CategoriaReceitaService,
              private subcategoriaReceitaService : SubcategoriaReceitaService,
              private contaService : ContaService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ReceitaComponent>, @Inject(MAT_DIALOG_DATA) public data: Receita,
              ) { }

  ngOnInit() {

  if(this.data!==null && this.data.receitaId !== null){
      this.receitaService.GetById(this.data.receitaId).subscribe(resultado => {

      this.formulario.controls.receitaId.setValue(resultado.receitaId);
      this.formulario.controls.categoria.setValue(resultado.subcategoriaReceita.categoriaReceitaId);
      this.formulario.controls.subcategoriaReceitaId.setValue(resultado.subcategoriaReceitaId);
      this.formulario.controls.descricao.setValue(resultado.descricao);
      this.formulario.controls.valor.setValue(resultado.valor);
      this.formulario.controls.contaId.setValue(resultado.contaId);
      this.formulario.controls.data.setValue(resultado.data);

      this.carregarSubcategoria();
    });
    this.titulo = 'Atualizar Receita';

  }else{
    this.titulo = 'Nova Receita';
    this.formulario.controls.subcategoriaReceitaId.disable();
    
  }

   this.carregarCategoria();
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

  carregarSubcategoria(){
   console.log(this.formulario.controls.categoria.value)
    if(this.formulario.controls.categoria.value !== ''){
      this.formulario.controls.subcategoriaReceitaId.enable();
      this.subcategoriaReceitaService.GetAll().subscribe(resultado => {
        this.subcategorias = resultado;
      });
    }else{
      this.formulario.controls.subcategoriaReceitaId.setValue(this.formulario.controls.subcategoriaReceitaId);
      this.formulario.controls.subcategoriaReceitaId.disable();
      this.subcategorias = [];
    }
  }

  cadastrar(): void{
    this.submitted = true;
    if(this.formulario.valid){
      const receita: Receita = this.formulario.value;

        if(this.formulario.controls.receitaId.value !== null){
        this.receitaService.Update(receita).subscribe(resultado => {
          alert('Receita atualizada com sucesso');
          this.dialogRef.close();
        })
      }else{
        this.receitaService.Create(receita).subscribe((resultado) =>{
          alert('Receita adicionada com sucesso');
          this.dialogRef.close();
      });
      }
    }
    }

    cancelar(): void{
      this.dialogRef.close();
    }

  get formularioControls() {
    return this.formulario.controls;
  }
}
