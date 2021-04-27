import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profissional } from './profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  private baseUrl = "http://localhost:8080/api/profissionais";

  constructor(private http: HttpClient) { }

  getProfissionais(): Observable<Profissional[]>{
    return this.http.get<Profissional[]>(`${this.baseUrl}`);
  }

  criarProfissional(profissional: Profissional): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, profissional);
}

  getProfissionalById(id: number): Observable<Profissional>{
    return this.http.get<Profissional>(`${this.baseUrl}/${id}`);
  }

  atualizarProfissional(id:number,profissional: Profissional):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, profissional);
  }

  apagarProfissional(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}