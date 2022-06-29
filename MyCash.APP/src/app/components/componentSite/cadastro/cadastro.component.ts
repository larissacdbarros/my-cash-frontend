import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  usuariosLista: Usuario[];
  formulario: FormGroup;
  registerSuccess!: boolean;


  constructor(private router: Router, private usuarioService: UsuarioService, private builder: FormBuilder) {

   }

  ngOnInit(): void {
    this.formulario = this.builder.group({
      Nome: new FormControl(null),
      Sobrenome: new FormControl(null),
      Email: new FormControl(null),
      Senha : new FormControl(null)
    })
    this.registerSuccess = false
  }

  EnviarFormulario(){
    const usuario: Usuario = this.formulario.value;
    console.log(usuario)
      if (usuario.usuarioId == null) {
        this.usuarioService.SalvarUsuario(usuario).subscribe((resultado) => {
          this.router.navigate(['/login'])
        });
  }


  }
}
