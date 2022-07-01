import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Fatura } from 'src/app/components/models/Fatura';
import { FaturaService } from 'src/app/components/sevices/fatura.service';

@Component({
  selector: 'app-pagarFatura',
  templateUrl: './pagarFatura.component.html',
  styleUrls: ['./pagarFatura.component.css']
})
export class PagarFaturaComponent implements OnInit {

  public faturas: Fatura[];
  public contaId: Number;
  constructor(private faturaService : FaturaService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<PagarFaturaComponent>,) { }



  ngOnInit() {
    this.contaId = Number(localStorage.getItem('contaId'));
    this.getFaturasAbertas(this.contaId);

  }

  pagarFatura(id: Number){
    this.faturaService.PagarFatura(id).subscribe(resultado => {
      this.toastr.success('Fatura paga com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Não é possível pagar essa fatura.');
    });
  }

  getFaturasAbertas(idConta: Number ){
    this.faturaService.GetFaturasAbertas(idConta).subscribe(resultado => {
      this.faturas = resultado;
    });
  }

}
