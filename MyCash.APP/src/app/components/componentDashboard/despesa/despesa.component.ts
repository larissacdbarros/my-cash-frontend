import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriaDespesa } from '../../models/CategoriaDespesa';
import { Conta } from '../../models/Conta';
import { DespesaConta } from '../../models/DespesaConta';
import { SubcategoriaDespesa } from '../../models/SubcategoriaDespesa';
import { CategoriaDespesaService } from '../../sevices/categoriaDespesa.service';
import { ContaService } from '../../sevices/conta.service';
import { DespesaContaService } from '../../sevices/despesaConta.service';
import { SubcategoriaDespesaService } from '../../sevices/subcategoriaDespesa.service';


@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  formulario = this.fb.group({
    despesaContaId: [null],
    descricao:['', Validators.required],
    categoria: ['', Validators.required],
    subcategoriaDespesaId:['', Validators.required],
    contaId:['', Validators.required],
    valor: ['', Validators.required],
    data:['', Validators.required]
  });



  public categorias: CategoriaDespesa[];
  public subcategorias: SubcategoriaDespesa[];
  public contas: Conta[];

  public submitted = false;
  public titulo: string;

  constructor(private despesaContaService: DespesaContaService,
              private categoriaDespesaService: CategoriaDespesaService,
              private subcategoriaDespesaSevice : SubcategoriaDespesaService,
              private contaService : ContaService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              public dialogRef: MatDialogRef<DespesaComponent>, @Inject(MAT_DIALOG_DATA) public data: DespesaConta,
               ) { }



  ngOnInit() {

    if(this.data!==null && this.data.despesaContaId !== null){
      this.despesaContaService.GetById(this.data.despesaContaId).subscribe(resultado => {

      this.formulario.controls.despesaContaId.setValue(resultado.despesaContaId);
      this.formulario.controls.descricao.setValue(resultado.descricao);
      this.formulario.controls.categoria.setValue(resultado.subcategoriaDespesa.categoriaDespesaId);
      this.formulario.controls.subcategoriaDespesaId.setValue(resultado.subcategoriaDespesaId);
      this.formulario.controls.contaId.setValue(resultado.contaId);
      this.formulario.controls.valor.setValue(resultado.valor);
      this.formulario.controls.data.setValue(resultado.data);


      this.carregarSubcategoria();
    });
    this.titulo = 'Atualizar Despesa';

  }else{
    this.titulo = 'Nova Despesa';
    this.formulario.controls.subcategoriaDespesaId.disable();
  }

 this.carregarCategoria();
 this.carregarConta();
}

carregarCategoria(){
  this.categoriaDespesaService.GetAll().subscribe(resultado => {
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
     this.formulario.controls.subcategoriaDespesaId.enable();
     this.subcategoriaDespesaSevice.GetAll().subscribe(resultado => {
       this.subcategorias = resultado;
     });
   }else{
     this.formulario.controls.subcategoriaDespesaId.setValue(this.formulario.controls.subcategoriaDespesaId);
     this.formulario.controls.subcategoriaDespesaId.disable();
     this.subcategorias = [];
   }
 }

 cadastrar(): void{
  this.submitted = true;
  if(this.formulario.valid){
    const despesaConta: DespesaConta = this.formulario.value;

      if(this.formulario.controls.despesaContaId.value !== null){
      this.despesaContaService.Update(despesaConta).subscribe(resultado => {
        this.toastr.success('Despesa atualizada com sucesso!');
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
