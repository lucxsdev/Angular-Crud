import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { IndexComponent } from './ui/index/index.component';





const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'categoria',
    component: CategoriaListComponent
  },
  {
    path: 'categoria/novo',
    component: CategoriaFormComponent
  },
  {
    path: 'categoria/:id',
    component: CategoriaFormComponent
  },
  {
    path: 'produto',
    component: ProdutoListComponent
  },
  {
    path: 'produto/novo',
    component: ProdutoFormComponent
  },
  {
    path: 'produto/:id',
    component: ProdutoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
