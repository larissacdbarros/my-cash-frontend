import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DespesaConta } from 'src/app/components/models/DespesaConta';
import { DespesaContaService } from 'src/app/components/sevices/despesaConta.service';
import { DespesaComponent } from '../despesa.component';

@Component({
  selector: 'app-despesadelete',
  templateUrl: './despesadelete.component.html',
  styleUrls: ['./despesadelete.component.css']
})
export class DespesadeleteComponent implements OnInit {

  public despesaConta: DespesaConta[];
  public contaId: Number;

  constructor(public dialogRef: MatDialogRef<DespesaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DespesaConta,
                private despesaContaService: DespesaContaService,
                private toastr: ToastrService) { }



  ngOnInit(): void {
    this.contaId = Number(localStorage.getItem('contaId'));
  }

  naoDeletar(): void{
    this.dialogRef.close();
  }

  delete(id){
    this.despesaContaService.Delete(id).subscribe(resultado => {
      this.dialogRef.close();
      this.toastr.success('Receita excluída com sucesso!');
      this.despesaContaService.GetByConta(this.contaId).subscribe( resultado =>{
      this.despesaConta = resultado;
      }
      );
    })
  }

}
