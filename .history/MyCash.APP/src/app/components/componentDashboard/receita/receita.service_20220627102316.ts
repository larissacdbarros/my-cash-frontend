import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receita } from '../../models/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  url = `${environment.baseUrl}/api/Receitas` ;

constructor(private http: HttpClient) { }

getAll(): Observable<Receita>{
  return this.http.get(`${this.url}`);
}

getById(id: number){
  return this.http.get(`${this.url}/${id}`);
}

}
