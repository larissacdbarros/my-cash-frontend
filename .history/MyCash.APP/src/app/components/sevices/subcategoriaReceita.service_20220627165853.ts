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

GetAll(): Observable<Subcategoria[]>{
  return this.http.get<Subcategoria[]>(`${this.url}`);
}

GetById(id: number): Observable<Subcategoria>{
  return this.http.get<Subcategoria>(`${this.url}/${id}`);
}

// CreateSubcategoria(receita: Subcategoria):Observable<any>{
//   return this.http.post<Subcategoria>(this.url, Subcategoria, httpOptions);
// }

}
