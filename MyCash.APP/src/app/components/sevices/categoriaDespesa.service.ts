import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDespesa } from '../models/CategoriaDespesa';

@Injectable({
  providedIn: 'root'
})
export class CategoriaDespesaService {

  url = `${environment.baseUrl}/api/CategoriasDespesa` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<CategoriaDespesa[]>{
  return this.http.get<CategoriaDespesa[]>(`${this.url}`);
}

GetById(id: number): Observable<CategoriaDespesa>{
  return this.http.get<CategoriaDespesa>(`${this.url}/${id}`);
}

}
