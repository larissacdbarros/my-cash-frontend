import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DespesaConta } from '../models/DespesaConta';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DespesaContaService {

  url = `${environment.baseUrl}/api/DespesasConta` ;

  constructor(private http: HttpClient) { }


  GetByConta(contaId: Number): Observable<DespesaConta[]>{
  return this.http.get<DespesaConta[]>(`${this.url}/conta/${contaId}`);
}

GetById(id: Number): Observable<DespesaConta>{
  return this.http.get<DespesaConta>(`${this.url}/${id}`);
}

Create(despesaConta: DespesaConta):Observable<any>{
  return this.http.post<DespesaConta>(this.url, despesaConta, httpOptions);
}

Update(despesaConta: DespesaConta): Observable<any> {
  return this.http.put<DespesaConta>(`${this.url}/${despesaConta.despesaContaId}`, despesaConta, httpOptions);
}

Delete(despesaContaId: Number): Observable<any>{
  return this.http.delete<Number>(`${this.url}/${despesaContaId}`, httpOptions);
}


}

