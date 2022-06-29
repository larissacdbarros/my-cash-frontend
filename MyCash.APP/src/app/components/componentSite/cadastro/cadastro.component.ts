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
  usuariosLista: Usuario[];
  formulario: any;
  registerSuccess!: boolean;

  get propriedade() {return this.formulario.controls}
  constructor(private router: Router, private usuarioService: UsuarioService, private builder: FormBuilder) {

   }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   Nome: new FormControl(null,Validators.required),
    //   Sobrenome: new FormControl(null,[Validators.required]),
    //   Email: new FormControl(null,[Validators.required, Validators.email]),
    //   Senha : new FormControl(null, [Validators.required])
    // })
    // this.registerSuccess = false
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
