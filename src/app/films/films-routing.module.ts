import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';


const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  {
    path: ':id',
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
