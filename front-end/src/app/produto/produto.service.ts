import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(produto: any) {
    return this.http.post('http://localhost:3000/produto', produto);
  }

  listar() {
    return this.http.get('http://localhost:3000/produto');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/produto/${id}`);
  }

  atualizar(produto: any) {
    return this.http.patch('http://localhost:3000/produto', produto);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/produto/${id}`);
  }

}
