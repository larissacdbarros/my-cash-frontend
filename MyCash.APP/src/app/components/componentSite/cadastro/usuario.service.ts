import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from './usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://localhost:5001/api/Usuarios';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.url);
    }
    SalvarUsuario(usuario : Usuario): Observable<any>{
      return this.http.post<Usuario>(this.url, usuario, httpOptions);
    }
    AddUsuario(usuario : Usuario): Observable<any>{
      return this.http.post<Usuario>(this.url, usuario, httpOptions);
}
}
