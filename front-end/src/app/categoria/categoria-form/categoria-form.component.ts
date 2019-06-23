import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  titulo = 'Nova categoria';

  /* Campos booleanos requeridos precisam ser inicializados
    na declaração do objeto vazio
  */
  categoria: any = {}; // Objeto vazio

  categorias: any = []; // Vetor vazio
  
  constructor(
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
      this.titulo = 'Editar categoria';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.categoria = await this.categoriaSrv.obterUm(id).toPromise();
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
      if (this.categoria._id) { // Tem _id; atualizar
        await this.categoriaSrv.atualizar(this.categoria).toPromise();
        this.snackBar.open('categoria atualizado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.categoriaSrv.novo(this.categoria).toPromise();
        this.snackBar.open('categoria atualizado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['categoria']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['categoria']);
  }

}
