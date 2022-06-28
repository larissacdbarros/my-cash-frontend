import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receita } from '../models/Receita';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  url = `${environment.baseUrl}/api/Receitas` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<Receita[]>{
  return this.http.get<Receita[]>(`${this.url}`);
}

GetById(id: number): Observable<Receita>{
  return this.http.get<Receita>(`${this.url}/${id}`);
}

Create(receita: Receita):Observable<any>{
  return this.http.post<Receita>(this.url, receita, httpOptions);
}

Update(receita: Receita): Observable<any> {
  return this.http.put<Receita>(this.url, receita, httpOptions);
}



}
