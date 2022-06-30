import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaConta } from 'src/app/components/models/DespesaConta';
import { DespesaContaService } from 'src/app/components/sevices/despesaConta.service';
import { DespesaComponent } from '../despesa.component';
import { DespesadeleteComponent } from '../despesadelete/despesadelete.component';
import { DespesadetalhesComponent } from '../despesadetalhes/despesadetalhes.component';

@Component({
  selector: 'app-despesalist',
  templateUrl: './despesalist.component.html',
  styleUrls: ['./despesalist.component.css']
})
export class DespesalistComponent implements OnInit {

  public despesaConta: DespesaConta[];

  constructor(private despesaContaService: DespesaContaService,
    private dialog : MatDialog) {
     }

  ngOnInit(): void {
    this.despesaContaService.GetAll().subscribe( resultado =>{
      this.despesaConta = resultado;
    }
    );
  }
  openDialogDespesaContaEditar(id: Number) {
    const dialogRef = this.dialog.open(DespesaComponent,
      {data: {despesaId: id}});
      dialogRef.afterClosed().subscribe(result => {
      this.despesaContaService.GetAll().subscribe( resultado =>{
        this.despesaConta = resultado;
      }
      );
    })

  }
  openDialogDespesaContaDetalhes(id: Number) {
    const dialogRef = this.dialog.open(DespesadetalhesComponent,{
      data: {despesaContaId: id},
      width: '600px'
    });
  }
  openDialogDeletarDespesaConta(id: Number){
    const dialogRef = this.dialog.open(DespesadeleteComponent,{
      data: {despesaContaId: id},
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.despesaContaService.GetAll().subscribe( resultado =>{
        this.despesaConta = resultado;
      }
      );
    })
  }

}
