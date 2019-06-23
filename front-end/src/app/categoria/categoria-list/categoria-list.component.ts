import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  public categorias: any = [];
  public displayedColumns: string[] = ['categoria', 'editar', 'excluir'];

  constructor(
    private categoriasrv: CategoriaService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    try {
      this.categorias = await this.categoriasrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir esta categoria? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.categoriasrv.excluir(id).toPromise();
        this.snackBar.open('Categoria excluído com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}

