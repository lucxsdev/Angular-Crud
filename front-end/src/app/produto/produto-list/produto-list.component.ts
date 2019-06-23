import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  public produtos: any = [];
  public displayedColumns: string[] = ['categoria', 'quantidade', 'titulo', 'valor', 'descricao', 'editar', 'excluir'];

  constructor(
    private produtoSrv: ProdutoService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    try {
      this.produtos = await this.produtoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este produto? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.produtoSrv.excluir(id).toPromise();
        this.snackBar.open('Produto excluído com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}

