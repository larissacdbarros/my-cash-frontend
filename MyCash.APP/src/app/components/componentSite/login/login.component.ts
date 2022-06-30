import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../cadastro/usuario';
import { UsuarioService } from '../cadastro/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuariosLista: any =[];
  email: '';
  password: '';
  userValido!: boolean;
  userInvalido!: boolean;
  loginLoad: boolean = false

  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit(): void {

    this.userValido = false;
    //   this.formulario = new FormGroup({
    //   Email: new FormControl(null,[Validators.required, Validators.email]),
    //   Senha : new FormControl(null, [Validators.required])
    // })
    // this.registerSuccess = false

  }

  Logar(){
    alert (this.email)
    this.usuarioService.PegarTodos().subscribe((data) => {
      this.usuariosLista = data;
      for (let i = 0; i < data.length; i++) {

        if

        (this.usuariosLista[i].email== this.email &&
        this.usuariosLista[i].senha== this.password)
        {
          this.userValido = true;
          this.userInvalido = false;
          this.loginLoad = true;
          setTimeout(() => {
            this.router.navigate(['dashboard']);
          }, 2000);
        }
      }
      if (this.userValido == false) {
        this.userInvalido = true;
      }
    });
  }
}
