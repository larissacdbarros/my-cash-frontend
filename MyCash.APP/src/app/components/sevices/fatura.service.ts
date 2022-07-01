import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fatura } from '../models/Fatura';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  url = `${environment.baseUrl}/api/Faturas` ;

constructor(private http: HttpClient) { }

GetFaturasAbertas(idConta: Number): Observable<Fatura[]>{

  return this.http.get<Fatura[]>(`${this.url}/${idConta}/FaturasAbertas`);;
}

PagarFatura(id: Number): Observable<Fatura>{

  return this.http.put<Fatura>(`${this.url}/${id}/Pagar`,{},httpOptions);
}



}
