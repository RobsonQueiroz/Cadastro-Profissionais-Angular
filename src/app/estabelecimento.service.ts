import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from './estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  

  private baseUrl = "http://localhost:8080/api/estabelecimentos";

  constructor(private http: HttpClient) { }

  getEstabelecimentos(): Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>(`${this.baseUrl}`);
  }

  criarEstabelecimento(estabelecimento: Estabelecimento): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, estabelecimento);
}

  getEstabelecimentoById(id: number): Observable<Estabelecimento>{
    return this.http.get<Estabelecimento>(`${this.baseUrl}/${id}`);
  }

  atualizarEstabelecimento(id:number,estabelecimento: Estabelecimento):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, estabelecimento);
  }

  apagarEstabelecimento(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
