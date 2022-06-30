import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DespesaCartao } from '../models/DespesaCartao';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DespesaCartaoService {

  url = `${environment.baseUrl}/api/DespesasCartao` ;
constructor(private http: HttpClient) { }

GetAll(): Observable<DespesaCartao[]>{
  return this.http.get<DespesaCartao[]>(`${this.url}`);
}

GetById(id: Number): Observable<DespesaCartao>{
  return this.http.get<DespesaCartao>(`${this.url}/${id}`);
}

Create(despesaCartao: DespesaCartao):Observable<any>{
  return this.http.post<DespesaCartao>(this.url, despesaCartao, httpOptions);
}

Update(despesaCartao: DespesaCartao): Observable<any> {
  return this.http.put<DespesaCartao>(`${this.url}/${despesaCartao.despesaCartaoId}`, despesaCartao, httpOptions);
}

Delete(despesaCartaoId: Number): Observable<any>{
  return this.http.delete<Number>(`${this.url}/${despesaCartaoId}`, httpOptions);
}

}
