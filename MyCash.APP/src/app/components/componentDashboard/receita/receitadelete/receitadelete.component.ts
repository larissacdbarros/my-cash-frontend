import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Receita } from 'src/app/components/models/Receita';
import { ReceitaService } from 'src/app/components/sevices/receita.service';
import { ReceitaComponent } from '../receita.component';

@Component({
  selector: 'app-receitadelete',
  templateUrl: './receitadelete.component.html',
  styleUrls: ['./receitadelete.component.css']
})
export class ReceitadeleteComponent implements OnInit {

  public receitas: Receita[];

  constructor(public dialogRef: MatDialogRef<ReceitaComponent>, @Inject(MAT_DIALOG_DATA) public data: Receita,
  private receitaService: ReceitaService) { }

  ngOnInit() {
  }

  naoDeletar(): void{
    this.dialogRef.close();
  }

  delete(id){
    this.receitaService.Delete(id).subscribe(resultado => {
      this.dialogRef.close();
      alert('Receita excluída com sucesso');
      this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
      }
      );
    })
  }
}
