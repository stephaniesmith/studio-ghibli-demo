import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly peopleUrl = `${environment.apiUrl}/people`

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCharacters(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.peopleUrl).pipe(
      take(1),
      tap(
        () => console.log('GET Characters'),
        ({ status, statusText, message }) => console.error(`Could NOT GET Characters: ${status} ${statusText} ${message}`)
      )
    );
  }

  getCharacterById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.peopleUrl}/${id}`).pipe(
      take(1),
      tap(
        () => console.log('GET Character by ID'),
        ({ status, statusText, message }) => console.error(`Could NOT GET Character by ID: ${status} ${statusText} ${message}`)
      )
    );
  }
}
