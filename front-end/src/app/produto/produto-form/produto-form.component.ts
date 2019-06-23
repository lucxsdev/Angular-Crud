import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from '../../categoria/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  titulo = 'Novo Produto';

  /* Campos booleanos requeridos precisam ser inicializados
    na declaração do objeto vazio
  */
  produto: any = {}; // Objeto vazio

  categorias: any = []; // Vetor vazio
  
  constructor(
    private produtoSrv: ProdutoService,
    private categoriaSrv: CategoriaService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar Produto';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.produto = await this.produtoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.carregarListas();
  }

  async carregarListas() {
    try {
      this.categorias = await this.categoriaSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }
  }

  async salvar() {
    try {
      if (this.produto._id) { // Tem _id; atualizar
        await this.produtoSrv.atualizar(this.produto).toPromise();
        this.snackBar.open('Produto atualizado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.produtoSrv.novo(this.produto).toPromise();
        this.snackBar.open('Produto atualizado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['produto']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['produto']);
  }

}
