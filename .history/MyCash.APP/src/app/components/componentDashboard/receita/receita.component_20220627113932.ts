import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Receita } from '../../models/Receita';
import { ReceitaService } from './receita.service';



@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  formulario: any;
  public receitas: Receita[];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.CarregarReceitas();
  }

  //get all
  CarregarReceitas(){
    this.receitaService.GetAll().subscribe( resultado =>{
      this.receitas = resultado;
    }
    );
  }

  CadastroReceita(): void{
    this.formulario = new  FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade : new FormControl(null),
      profissao: new FormControl(null)

    });
    const receita: Receita = this.formulario.value;
    this.receitaService.CreateReceita(receita).subscribe((resultado) =>{
        alert('Receita adicionada com sucesso')
    })
  }

  //getById
  



}
