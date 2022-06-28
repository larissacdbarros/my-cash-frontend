import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaReceita } from '../models/CategoriaReceita';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaReceitaService {

  url = `${environment.baseUrl}/api/SubcategoriasReceita` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<CategoriaReceita[]>{
  return this.http.get<CategoriaReceita[]>(`${this.url}`);
}

GetById(id: number): Observable<CategoriaReceita>{
  return this.http.get<CategoriaReceita>(`${this.url}/${id}`);
}

// CreateCategoriaReceita(receita: CategoriaReceita):Observable<any>{
//   return this.http.post<CategoriaReceita>(this.url, categoriaReceita, httpOptions);
// }

}
