import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  url = envi "api/Receitas"

constructor(private http: HttpClient) { }

}
