import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DespesaCartao } from 'src/app/components/models/DespesaCartao';
import { DespesaCartaoService } from 'src/app/components/sevices/despesaCartao.service';
import { DespesaCartaoComponent } from '../despesaCartao.component';

@Component({
  selector: 'app-despesaCartaoDetalhes',
  templateUrl: './despesaCartaoDetalhes.component.html',
  styleUrls: ['./despesaCartaoDetalhes.component.css']
})
export class DespesaCartaoDetalhesComponent implements OnInit {

  public despesaCartao: DespesaCartao[];

  constructor( private despesaCartaoService: DespesaCartaoService,
                public dialogRef: MatDialogRef<DespesaCartaoComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DespesaCartao ) { }

  ngOnInit() {
    this.despesaCartaoService.GetById(this.data.despesaCartaoId).subscribe( resultado =>{
      this.data = resultado;
    }
    );
  }

  cancelar(): void{
    this.dialogRef.close();
  }

}
