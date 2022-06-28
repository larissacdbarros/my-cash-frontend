import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conta
 } from '../models/Conta
';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class Conta
Service {

  url = `${environment.baseUrl}/api/Conta
  s` ;

constructor(private http: HttpClient) { }

GetAll(): Observable<Conta
[]>{
  return this.http.get<Conta
  []>(`${this.url}`);
}

GetById(id: number): Observable<Conta
>{
  return this.http.get<Conta
  >(`${this.url}/${id}`);
}

CreateConta
(Conta
  : Conta
  ):Observable<any>{
  return this.http.post<Conta
  >(this.url, Conta
    , httpOptions);
}



}
