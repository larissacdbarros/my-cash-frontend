import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Receita } from 'src/app/components/models/Receita';
import { ReceitaService } from 'src/app/components/sevices/receita.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ReceitaComponent } from '../receita.component';
import { ReceitadeleteComponent } from '../receitadelete/receitadelete.component';
import { ReceitadetalhesComponent } from '../receitadetalhes/receitadetalhes.component';



@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css'],
})
export class ReceitalistComponent implements OnInit {

  public receitas: Receita[];
  public contaId: Number;

  constructor(private receitaService: ReceitaService,
              private dialog : MatDialog) { }

  ngOnInit(): void {
    this.contaId = Number(localStorage.getItem('contaId'));
    this.receitaService.GetByConta(this.contaId).subscribe( resultado =>{
      this.receitas = resultado;
    }
    )
  }
  openDialogReceitaEditar(id: Number) {
    const dialogRef = this.dialog.open(ReceitaComponent,
      {data: {receitaId: id}});
      dialogRef.afterClosed().subscribe(result => {
      this.receitaService.GetByConta(this.contaId).subscribe( resultado =>{
        this.receitas = resultado;
      }
      );
    })

  }

  openDialogReceitaDetalhes(id: Number) {
    const dialogRef = this.dialog.open(ReceitadetalhesComponent,{
      data: {receitaId: id},
      width: '600px'
    });
  }

  openDialogDeletarReceita(id: Number){
    const dialogRef = this.dialog.open(ReceitadeleteComponent,{
      data: {receitaId: id},
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.receitaService.GetByConta(this.contaId).subscribe( resultado =>{
        this.receitas = resultado;
      }
      );
    })
  }







}
