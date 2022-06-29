import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../cadastro/usuario';
import { UsuarioService } from '../cadastro/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuariosLista: Usuario[];
  email: string;
  password: string;
  // formulario: any;

  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit(): void {
    //   this.formulario = new FormGroup({
    //   Email: new FormControl(null,[Validators.required, Validators.email]),
    //   Senha : new FormControl(null, [Validators.required])
    // })
    // this.registerSuccess = false

  }

  Logar(){
    console.log(this.email+'-'+this.password)
    this.usuarioService.PegarTodos().subscribe((data) => {
      this.usuariosLista = data;
      for (let i = 0; i < this.usuariosLista.length; i++) {
        if (this.usuariosLista[i].email== this.email &&
        this.usuariosLista[i].senha== this.password){
        this.router.navigate(['/dashboard']);


        }
      }
    });
  }
}
