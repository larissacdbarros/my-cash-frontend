import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaCartao } from 'src/app/components/models/DespesaCartao';
import { DespesaCartaoService } from 'src/app/components/sevices/despesaCartao.service';
import { DespesaCartaoComponent } from '../despesaCartao.component';
import { DespesaCartaoDeleteComponent } from '../DespesaCartaoDelete/DespesaCartaoDelete.component';
import { DespesaCartaoDetalhesComponent } from '../despesaCartaoDetalhes/despesaCartaoDetalhes.component';

@Component({
  selector: 'app-despesaCartaoList',
  templateUrl: './despesaCartaoList.component.html',
  styleUrls: ['./despesaCartaoList.component.css']
})
export class DespesaCartaoListComponent implements OnInit {

  public despesaCartao: DespesaCartao[];

  constructor(private despesaCartaoService: DespesaCartaoService,
            private dialog : MatDialog
              ) { }

  ngOnInit() {
    this.despesaCartaoService.GetAll().subscribe( resultado =>{
      this.despesaCartao = resultado;
    }
    );
  }

  openDialogDespesaCartaoEditar(id: Number) {
    const dialogRef = this.dialog.open(DespesaCartaoComponent,
      {data: {despesaCartaoId: id}});
      dialogRef.afterClosed().subscribe(result => {
      this.despesaCartaoService.GetAll().subscribe( resultado =>{
        this.despesaCartao = resultado;
      }
      );
    })
  }

  openDialogDespesaCartaoDetalhes(id: Number) {
    const dialogRef = this.dialog.open(DespesaCartaoDetalhesComponent,{
      data: {despesaCartaoId: id},
      width: '600px'
    });
  }

  openDialogDeletarDespesaCartao(id: Number){
      const dialogRef = this.dialog.open(DespesaCartaoDeleteComponent,{
        data: {despesaCartaoId: id},
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.despesaCartaoService.GetAll().subscribe( resultado =>{
          this.despesaCartao = resultado;
        }
        );
      })
    }

}
