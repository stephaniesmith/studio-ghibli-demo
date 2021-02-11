import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [FilmListComponent, FilmComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
