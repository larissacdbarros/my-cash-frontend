import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Receita } from 'src/app/components/models/Receita';
import { ReceitaService } from 'src/app/components/sevices/receita.service';
import { ReceitaComponent } from '../receita.component';

@Component({
  selector: 'app-receitadetalhes',
  templateUrl: './receitadetalhes.component.html',
  styleUrls: ['./receitadetalhes.component.css']
})
export class ReceitadetalhesComponent implements OnInit {


  public receitas: Receita[];

  constructor(private receitaService: ReceitaService,
              public dialogRef: MatDialogRef<ReceitaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Receita) { }



  ngOnInit() {
    this.receitaService.GetById(this.data.receitaId).subscribe( resultado =>{
      this.data = resultado;
    }
    );
  }

  cancelar(): void{
      this.dialogRef.close();
    }


}
