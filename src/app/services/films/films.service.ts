import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Film } from './films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly filmUrl = `${environment.apiUrl}/films`

  constructor(
    private httpClient: HttpClient,
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

  getFilmById(id: string): Observable<Film> {
    return this.httpClient.get<Film>(`${this.filmUrl}/${id}`).pipe(
      take(1),
      tap(
        () => console.log('GET Film by ID'),
        ({ status, statusText, message }) => console.error(`Could NOT GET Film by ID: ${status} ${statusText} ${message}`)
      )
    );
  }
}
