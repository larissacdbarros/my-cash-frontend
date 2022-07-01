import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriaDespesa } from '../../models/CategoriaDespesa';
import { DespesaCartao } from '../../models/DespesaCartao';
import { SubcategoriaDespesa } from '../../models/SubcategoriaDespesa';
import { CartaoCreditoService } from '../../sevices/cartaoCredito.service';
import { CategoriaDespesaService } from '../../sevices/categoriaDespesa.service';
import { DespesaCartaoService } from '../../sevices/despesaCartao.service';
import { SubcategoriaDespesaService } from '../../sevices/subcategoriaDespesa.service';
import { Validators } from '@angular/forms';
import { ContaService } from '../../sevices/conta.service';
import { Conta } from '../../models/Conta';

@Component({
  selector: 'app-despesaCartao',
  templateUrl: './despesaCartao.component.html',
  styleUrls: ['./despesaCartao.component.css']
})
export class DespesaCartaoComponent implements OnInit {

  formulario = this.fb.group({
    despesaCartaoId: [null],
    descricao:['', Validators.required],
    categoria: ['', Validators.required],
    subcategoriaDespesaId:['', Validators.required],
    valor: ['', Validators.required],
    data:['', Validators.required],
    contaId: ['', Validators.required]

  });


  public categorias: CategoriaDespesa[];
  public subcategorias: SubcategoriaDespesa[];
  public contas: Conta[];
  public usuarioId: Number




  public submitted = false;
  public titulo: string;

  constructor(private despesaCartaoService: DespesaCartaoService,
    private categoriaDespesaService: CategoriaDespesaService,
    private subcategoriaDespesaSevice: SubcategoriaDespesaService,
    private contaService: ContaService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<DespesaCartaoComponent>, @Inject(MAT_DIALOG_DATA) public data: DespesaCartao) { }

  ngOnInit() {
    this.usuarioId = Number(localStorage.getItem('usuarioId'));

    if(this.data!==null && this.data.despesaCartaoId !== null){
      this.despesaCartaoService.GetById(this.data.despesaCartaoId).subscribe(resultado => {

      this.formulario.controls.descricao.setValue(resultado.descricao);
      this.formulario.controls.categoria.setValue(resultado.subcategoriaDespesa.categoriaDespesaId);
      this.formulario.controls.subcategoriaDespesaId.setValue(resultado.subcategoriaDespesaId);
      this.formulario.controls.valor.setValue(resultado.valor);
      this.formulario.controls.contaId.setValue(resultado.fatura.contaId);
      this.formulario.controls.data.setValue(resultado.data);

      this.carregarSubcategoria();
    });
    this.titulo = 'Atualizar Despesa Cartão';

  }else{
    this.titulo = 'Nova Despesa Cartão';
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
    this.contaService.GetByUsuarioId(this.usuarioId).subscribe(resultado => {
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
      const despesaCartao: DespesaCartao = this.formulario.value;

        if(this.formulario.controls.despesaCartaoId.value !== null){
        this.despesaCartaoService.Update(despesaCartao).subscribe(resultado => {
          this.toastr.success('Despesa do cartão atualizada com sucesso!');
          this.dialogRef.close();
        })
      }else{
        this.despesaCartaoService.Create(despesaCartao).subscribe((resultado) =>{
          this.toastr.success('Despesa do cartão adicionada com sucesso!');
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
