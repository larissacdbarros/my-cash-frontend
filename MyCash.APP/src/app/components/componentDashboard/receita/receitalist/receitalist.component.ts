import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Receita } from 'src/app/components/models/Receita';
import { ReceitaService } from 'src/app/components/sevices/receita.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ReceitaComponent } from '../receita.component';


@Component({
  selector: 'app-receitalist',
  templateUrl: './receitalist.component.html',
  styleUrls: ['./receitalist.component.css']
})
export class ReceitalistComponent implements OnInit {

  public receitas: Receita[];


  constructor(private receitaService: ReceitaService,
              private receita : MatDialog) { }



  ngOnInit(): void {
    this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }
  openDialogReceita() {
    this.receita.open(ReceitaComponent);
  }

  


}
