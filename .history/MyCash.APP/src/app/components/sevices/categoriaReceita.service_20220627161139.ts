import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaReceita } from '../models/CategoriaReceita';
import { Receita } from '../models/Receita';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaReceitaService {

  url = `${environment.baseUrl}/api/CategoriasReceita` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<CategoriaReceita[]>{
  return this.http.get<CategoriaReceita[]>(`${this.url}`);
}

GetById(id: number): Observable<CategoriaReceita>{
  return this.http.get<CategoriaReceita>(`${this.url}/${id}`);
}

CreateCategoriaReceita(receita: CategoriaReceita):Observable<any>{
  return this.http.post<Receita>(this.url, receita, httpOptions);
}



}
