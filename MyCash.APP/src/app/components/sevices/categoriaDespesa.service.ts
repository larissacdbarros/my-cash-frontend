import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDespesa } from '../models/CategoriaDespesa';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaDespesaContaService {

  url = `${environment.baseUrl}/api/CategoriasDespesaConta` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<CategoriaDespesa[]>{
  return this.http.get<CategoriaDespesa[]>(`${this.url}`);
}

GetById(id: number): Observable<CategoriaDespesa>{
  return this.http.get<CategoriaDespesa>(`${this.url}/${id}`);
}

// CreateCategoriaDespesaConta(receita: CategoriaDespesaConta):Observable<any>{
//   return this.http.post<CategoriaDespesaConta>(this.url, categoriaDespesaConta, httpOptions);
// }

}
