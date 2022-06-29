import { Component, OnInit } from '@angular/core';
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
  password: Number;

  constructor(private usuarioService: UsuarioService, private router : Router) { }

  ngOnInit(): void {

  }

  Logar(){
    console.log(this.email+'-'+this.password)
    this.usuarioService.PegarTodos().subscribe((data) => {
      this.usuariosLista = data;
      for (let i = 0; i < this.usuariosLista.length; i++) {
        if (this.usuariosLista[i].email == this.email &&
        this.usuariosLista[i].senha == this.password){
        this.router.navigate(['/dashboard']);
        }
      }
    });
  }
}
