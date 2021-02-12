import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { Film, FilmDetail, FilmWithoutPeople, FilmWithPeople } from './films';
import { PeopleService } from '../people/people.service';
import { People } from '../people/people';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly filmUrl = `${environment.apiUrl}/films`

  constructor(
    private httpClient: HttpClient,
    private people: PeopleService
  ) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.filmUrl).pipe(
      take(1),
      tap(
        () => console.log('GET Films'),
        ({ status, statusText, message }) => console.error(`Could NOT GET Films: ${status} ${statusText} ${message}`)
      )
    );
  }

  getFilmById(id: string): Observable<FilmWithPeople> {
    return this.httpClient.get<FilmWithoutPeople>(`${this.filmUrl}/${id}`).pipe(
      take(1),
      tap(
        () => console.log('GET Film by ID'),
        ({ status, statusText, message }) => console.error(`Could NOT GET Film by ID: ${status} ${statusText} ${message}`)
      ),
      mergeMap(film => {
        const people = film.people.filter(url => url.includes('-'))
          .map(url => url.substring(39, 75))
          .map(id => this.people.getCharacterById(id));

        return of({ ...film, people });
      })
    );
  }
}
