import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  url = ´`` environment.baseUrl + 'api/Receitas';

constructor(private http: HttpClient) { }

}
