import { Component, OnInit } from '@angular/core';
import { Receita } from '../../models/Receita';


@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  public receitas: Receita[];

  constructor(private fb: Fomr
              private alunoService: AlunoService) { }

  ngOnInit(): void {
    carregarAlunos();
  }

  carregarAlunos(){
    alunos = this.aluno
  }
}
