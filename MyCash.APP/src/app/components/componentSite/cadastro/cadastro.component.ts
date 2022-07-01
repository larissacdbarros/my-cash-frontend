import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  UsuariosList$!: Observable<any[]>
  formulario: any;
  registerSuccess!: boolean;



  //get propriedade() {return this.formulario.controls}
  constructor(private router: Router, private usuarioService: UsuarioService, private builder: FormBuilder,) {

   }

  ngOnInit(): void {
    this.UsuariosList$ = this.usuarioService.PegarTodos()
    this.formulario = new FormGroup({
      Nome: new FormControl(null),
      Sobrenome: new FormControl (null),
      Email: new FormControl (null),
      Senha : new FormControl(null),
    })
    this.registerSuccess = false
  }




  EnviarFormulario(){
    const usuario: Usuario = this.formulario.value;
    this.registerSuccess =true
    this.usuarioService.AddUsuario(usuario).subscribe(
      (resultado) =>setTimeout(() => {
        this.router.navigate(['login']);
      }, 500 )
    )
  }

  Logar(){
    this.router.navigate(['']);
  }
}
