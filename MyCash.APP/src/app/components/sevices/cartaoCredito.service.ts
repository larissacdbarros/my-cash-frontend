import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartaoCredito } from '../models/CartaoCredito';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartaoCreditoService {

  url = `${environment.baseUrl}/api/CartoesCredito` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<CartaoCredito[]>{
  return this.http.get<CartaoCredito[]>(`${this.url}`);
}

GetById(id: number): Observable<CartaoCredito>{
  return this.http.get<CartaoCredito>(`${this.url}/${id}`);
}

CreateConta(Conta: CartaoCredito):Observable<any>{
  return this.http.post<CartaoCredito>(this.url, Conta, httpOptions);
}

}
