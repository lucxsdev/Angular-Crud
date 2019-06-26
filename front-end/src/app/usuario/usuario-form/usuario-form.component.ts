import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  titulo = 'Novo Usuario';

  /* Campos booleanos requeridos precisam ser inicializados
    na declaração do objeto vazio
  */
  usuario: any = {}; // Objeto vazio

  categorias: any = []; // Vetor vazio
  
  constructor(
    private usuarioSrv: UsuarioService,
    // private categoriaSrv: CategoriaService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar usuario';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.usuario = await this.usuarioSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    // this.carregarListas();
  }

  // async carregarListas() {
  //   try {
  //     this.categorias = await this.categoriaSrv.listar().toPromise();
  //   } catch (erro) {
  //     console.error(erro);
  //   }
  // }

  async salvar() {
    try {
      if (this.usuario._id) { // Tem _id; atualizar
        await this.usuarioSrv.atualizar(this.usuario).toPromise();
        this.snackBar.open('usuario atualizado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.usuarioSrv.novo(this.usuario).toPromise();
        this.snackBar.open('usuario atualizado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['usuario']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['usuario']);
  }

}
