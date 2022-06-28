import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Receita } from '../../models/Receita';
import {BsModalService} from '@angular-devkit/build-angular'


@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  public receitas: Receita[];

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private alunoService: AlunoService) { }

  ngOnInit(): void {
    carregarAlunos();
  }

  carregarAlunos(){
    alunos = this.aluno
  }
}
