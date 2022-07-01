import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DespesaCartao } from 'src/app/components/models/DespesaCartao';
import { DespesaCartaoService } from 'src/app/components/sevices/despesaCartao.service';
import { ReceitaComponent } from '../../receita/receita.component';

@Component({
  selector: 'app-DespesaCartaoDelete',
  templateUrl: './DespesaCartaoDelete.component.html',
  styleUrls: ['./DespesaCartaoDelete.component.css']
})
export class DespesaCartaoDeleteComponent implements OnInit {

  public despesaCartao : DespesaCartao[];
  public contaId: Number;

  constructor(private despesaCartaoService: DespesaCartaoService,
              @Inject(MAT_DIALOG_DATA) public data: DespesaCartao,
              public dialogRef: MatDialogRef<ReceitaComponent>,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.contaId = Number(localStorage.getItem('contaId'));
  }

  naoDeletar(): void{
    this.dialogRef.close();
  }

  delete(id){
    this.despesaCartaoService.Delete(id).subscribe(resultado => {
      this.dialogRef.close();
      this.toastr.success('Receita excluída com sucesso!');
      this.despesaCartaoService.GetByConta(this.contaId).subscribe( resultado =>{
      this.despesaCartao = resultado;
      }
      );
    })
  }

}
