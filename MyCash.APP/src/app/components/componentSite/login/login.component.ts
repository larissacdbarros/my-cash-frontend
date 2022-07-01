import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../sevices/usuario.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario = this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
  });

  constructor(private usuarioService: UsuarioService,
                private router : Router,
                private fb: FormBuilder,
                private toastr: ToastrService) { }

  ngOnInit(): void {

  }


  Logar(){
    this.usuarioService.GetUsuarioLogado(

      this.formulario.controls.email.value,
      this.formulario.controls.password.value ).subscribe(resultado=>{
        console.log(resultado)
      this.toastr.success('Acesso permitido.');
      localStorage.setItem('islogado', 'true')
      localStorage.setItem('contaId', String (resultado.conta.contaId))
      localStorage.setItem('usuarioId', String (resultado.usuarioId))
      this.router.navigate(['dashboard']);
    }, error =>{
      this.toastr.error('Acesso negado.');
    })

  }
}
