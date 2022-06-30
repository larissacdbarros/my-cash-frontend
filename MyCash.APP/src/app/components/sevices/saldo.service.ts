import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Saldo} from '../models/Saldo';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  url = `${environment.baseUrl}/api/saldos` ;

constructor(private http: HttpClient) { }

GetSaldos(contaId: Number): Observable<Saldo>{
  return this.http.get<Saldo>(`${this.url}/${contaId}`);
}



}
