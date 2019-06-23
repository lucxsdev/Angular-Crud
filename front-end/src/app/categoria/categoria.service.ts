import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(categoria: any) {
    return this.http.post('http://localhost:3000/categoria', categoria);
  }

  listar() {
    return this.http.get('http://localhost:3000/categoria');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/categoria/${id}`);
  }

  atualizar(categoria: any) {
    return this.http.patch('http://localhost:3000/categoria', categoria);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/categoria/${id}`);
  }

}
