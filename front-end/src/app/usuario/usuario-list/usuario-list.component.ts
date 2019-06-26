import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  public usuarios: any = [];
  public displayedColumns: string[] = ['usuario', 'email', 'editar', 'excluir'];

  constructor(
    private usuarioSrv: UsuarioService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    try {
      this.usuarios = await this.usuarioSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este usuario? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.usuarioSrv.excluir(id).toPromise();
        this.snackBar.open('Usuário excluído com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}

