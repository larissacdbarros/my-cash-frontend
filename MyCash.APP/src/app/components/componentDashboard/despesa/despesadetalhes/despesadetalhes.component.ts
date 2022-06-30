import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DespesaConta } from 'src/app/components/models/DespesaConta';
import { DespesaContaService } from 'src/app/components/sevices/despesaConta.service';
import { DespesaComponent } from '../despesa.component';

@Component({
  selector: 'app-despesadetalhes',
  templateUrl: './despesadetalhes.component.html',
  styleUrls: ['./despesadetalhes.component.css']
})
export class DespesadetalhesComponent implements OnInit {

  public despesaConta: DespesaConta[];

  constructor(private despesaContaService: DespesaContaService,
    public dialogRef: MatDialogRef<DespesaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DespesaConta) { }

  ngOnInit(): void {
    this.despesaContaService.GetById(this.data.despesaContaId).subscribe( resultado =>{
      this.data = resultado;
    }
    );
  }

  cancelar(): void{
    this.dialogRef.close();
  }


}
