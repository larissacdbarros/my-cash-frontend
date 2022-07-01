import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, timer } from 'rxjs';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../sevices/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {




  formulario = this.fb.group({
    usuarioId: [null],
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    email:['', Validators.required],
    senha:['', Validators.required]

  });

  UsuariosList$!: Observable<any[]>
  // formulario: any;
  registerSuccess!: boolean;



  //get propriedade() {return this.formulario.controls}
  constructor(private router: Router,
            private usuarioService: UsuarioService,
            private builder: FormBuilder,
            private fb: FormBuilder,
            private toastr: ToastrService,
            ) {

   }
//corrigir formulario
  ngOnInit(): void {
    // this.UsuariosList$ = this.usuarioService.PegarTodos()
    // this.formulario = new FormGroup({
    //   Nome: new FormControl(null),
    //   Sobrenome: new FormControl (null),
    //   Email: new FormControl (null),
    //   Senha : new FormControl(null),
    // })
    // this.registerSuccess = false
  }



//cadastrar usuario - nome
  // EnviarFormulario(){
  //   const usuario: Usuario = this.formulario.value;
  //   this.registerSuccess =true
  //   this.usuarioService.AddUsuario(usuario).subscribe(
  //     (resultado) =>setTimeout(() => {
  //       this.router.navigate(['login']);
  //     }, 500 )
  //   )
  // }

CadastrarUsuario(){
  if(this.formulario.valid){
    const usuario: Usuario = this.formulario.value;
    this.usuarioService.AddUsuario(usuario).subscribe((resultado) =>{
      this.toastr.success('Cadastro realizado com sucesso');
      this.router.navigate(['login']);
    })
  }

}

  Logar(){
    this.router.navigate(['']);
  }
}
