import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaReceita } from '../models/CategoriaReceita';
import { SubcategoriaReceita } from '../models/SubcategoriaReceita';


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

GetAll(): Observable<SubcategoriaReceita[]>{
  return this.http.get<SubcategoriaReceita[]>(`${this.url}`);
}

GetById(id: number): Observable<SubcategoriaReceita>{
  return this.http.get<SubcategoriaReceita>(`${this.url}/${id}`);
}

// CreateSubcategoriaReceita(receita: SubcategoriaReceita):Observable<any>{
//   return this.http.post<SubcategoriaReceita>(this.url, SubcategoriaReceita, httpOptions);
// }

}
