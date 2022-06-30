import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { CategoriaDespesa } from '../../models/CategoriaDespesa';
import { Conta } from '../../models/Conta';
import { DespesaConta } from '../../models/DespesaConta';
import { SubcategoriaDespesa } from '../../models/SubcategoriaDespesa';
import { ContaService } from '../../sevices/conta.service';
import { DespesaContaService } from '../../sevices/despesaConta.service';


@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  formulario = this.fb.group({
    DespesaContaId: [null],
    categoria: ['', Validators.required],
    subcategoriaDespesaContaId:['', Validators.required],
    descricao:['', Validators.required],
    valor: ['', Validators.required],
    contaId:['', Validators.required],
    data:['', Validators.required]
  });



  public categorias: CategoriaDespesa[];
  public subcategorias: SubcategoriaDespesa[];
  public contas: Conta[];

  public submitted = false;
  public titulo: string;

  constructor(private despesaContaService: DespesaContaService,
              private categoriaCategoriaDespesa: CategoriaDespesa,
              private subcategoriaDespesa : SubcategoriaDespesa,
              private contaService : DespesaContaService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              public dialogRef: MatDialogRef<DespesaComponent>, @Inject(MAT_DIALOG_DATA) public data: DespesaConta,
               ) { }



  ngOnInit() {

    if(this.data!==null && this.data.despesaContaId !== null){
      this.despesaContaService.GetById(this.data.despesaContaId).subscribe(resultado => {

      this.formulario.controls.despesaContaId.setValue(resultado.despesaContaId);
      this.formulario.controls.descricao.setValue(resultado.descricao);
      this.formulario.controls.categoriaDespesaId.setValue(resultado.categoriaDespesaId);
      this.formulario.controls.contaId.setValue(resultado.contaId);
      this.formulario.controls.conta.setValue(resultado.conta);
      this.formulario.controls.valor.setValue(resultado.valor);
      this.formulario.controls.data.setValue(resultado.data);
      this.formulario.controls.subcategoriadespesa.setValue(resultado.subcategoriadespesa);
      this.formulario.controls.subcategoriaDespesaId.setValue(resultado.subcategoriaDespesaId);

      this.carregarSubcategoria();
    });
    this.titulo = 'Atualizar Despesa';

  }else{
    this.titulo = 'Nova Despesa';
    this.formulario.controls.subcategoriaDespesaContaId.disable();
  }

 this.carregarCategoria();
 this.carregarConta();
}

carregarCategoria(){
  this.categoriaCategoriaDespesa.GetAll().subscribe(resultado => {
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
     this.formulario.controls.subcategoriaDespesaContaId.enable();
     this.subcategoriaDespesaContaService.GetAll().subscribe(resultado => {
       this.subcategorias = resultado;
     });
   }else{
     this.formulario.controls.subcategoriaDespesaContaId.setValue(this.formulario.controls.subcategoriaDespesaContaId);
     this.formulario.controls.subcategoriaDespesaContaId.disable();
     this.subcategorias = [];
   }
 }

 cadastrar(): void{
  this.submitted = true;
  if(this.formulario.valid){
    const despesaConta: DespesaConta = this.formulario.value;

      if(this.formulario.controls.despesaContaId.value !== null){
      this.despesaContaService.Update(despesaConta).subscribe(resultado => {
        this.toastr.success('Despesa atulizada com sucesso!');
        this.dialogRef.close();
      })
    }else{
      this.despesaContaService.Create(despesaConta).subscribe((resultado) =>{
        this.toastr.success('Despesa adicionada com sucesso!');
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
