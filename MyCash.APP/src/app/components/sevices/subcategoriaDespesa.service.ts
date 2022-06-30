import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubcategoriaDespesa } from '../models/SubcategoriaDespesa';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaDespesaService {

  url = `${environment.baseUrl}/api/SubcategoriasDespesa` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<SubcategoriaDespesa[]>{
  return this.http.get<SubcategoriaDespesa[]>(`${this.url}`);
}

GetById(id: number): Observable<SubcategoriaDespesa>{
  return this.http.get<SubcategoriaDespesa>(`${this.url}/${id}`);
}

// CreateSubcategoriaDespesa(receita: SubcategoriaDespesa):Observable<any>{
//   return this.http.post<SubcategoriaDespesa>(this.url, SubcategoriaDespesa, httpOptions);
// }


}
