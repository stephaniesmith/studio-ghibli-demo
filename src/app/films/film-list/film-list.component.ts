import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../services/films/films';
import { FilmsService } from '../../services/films/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  filmsObservable: Observable<Film[]> = this.films.getFilms();

  constructor(private films: FilmsService) { }

  ngOnInit(): void {
  }

}
