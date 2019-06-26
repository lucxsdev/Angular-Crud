import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(usuario: any) {
    return this.http.post('http://localhost:3000/usuario', usuario);
  }

  listar() {
    return this.http.get('http://localhost:3000/usuario');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/usuario/${id}`);
  }

  atualizar(usuario: any) {
    return this.http.patch('http://localhost:3000/usuario', usuario);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/usuario/${id}`);
  }

}
