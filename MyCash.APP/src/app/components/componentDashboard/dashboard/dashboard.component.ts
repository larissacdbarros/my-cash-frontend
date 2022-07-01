import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Receita } from '../../models/Receita';
import { CartaocreditoComponent } from '../cartaocredito/cartaocredito.component';
import { DespesaComponent } from '../despesa/despesa.component';
import { ReceitaComponent } from '../receita/receita.component';
import { ReceitalistComponent } from '../receita/receitalist/receitalist.component';
import { DespesalistComponent } from '../despesa/despesalist/despesalist.component';
import { CartaocreditolistComponent } from '../cartaocredito/cartaocreditolist/cartaocreditolist.component';
import { ReceitaService } from '../../sevices/receita.service';
import { DespesaCartaoComponent } from '../despesaCartao/despesaCartao.component';
import { SaldoService } from '../../sevices/saldo.service';
import { Usuario } from '../../models/Usuario';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  saldoAtual: Number;
  saldoReceita : Number;
  saldoDespesa : Number;
  totalFaturaCartao : Number;

   public receitas: Receita[];

  exibirLista1 = false;
  exibirLista2 = false;
  exibirLista3 = false;




  constructor(private receita : MatDialog, private despesa : MatDialog,
              private cartaocredito : MatDialog,
              private saldoService: SaldoService,
              private receitaService: ReceitaService)  {



   }

   ngOnInit(): void {
    this.preencherSaldos(3); //aqui deverá ser passada uma conta desse usupario
  }


  openDialogAdicionarReceita() {
    this.receita.open(ReceitaComponent);

  }

  openDialogAdicionarDespesaConta() {
    this.despesa.open(DespesaComponent);
  }

  openDialogAdicionarDespesaCartao() {
    this.cartaocredito.open(DespesaCartaoComponent);
  }

  mostrarLista1() {
    this.exibirLista1 = !this.exibirLista1;
  }

  listarDespesaConta() {
    this.exibirLista2 = !this.exibirLista2;
  }
  listarDespesaCartao() {
    this.exibirLista3 = !this.exibirLista3;
  }


  preencherSaldos(contaId: Number){

    this.saldoService.GetSaldos(contaId).subscribe(resultado => {
      this.saldoAtual= resultado.saldoAtual;
      this.saldoReceita = resultado.saldoReceita;
      this.saldoDespesa= resultado.saldoDespesa;
      this.totalFaturaCartao= resultado.totalFaturaCartao;
    });



  }




}


