import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getCharacters({ gender, eyeColor, hairColor }: any = { gender: '', eyeColor: '', hairColor: '' }): Observable<any[]> {
    let params = new HttpParams()
    
    if (gender) params = params.set('gender', gender);
    if (eyeColor) params = params.set('eye_color', eyeColor);
    if (hairColor) params = params.set('hair_color', hairColor);

    return this.httpClient.get<any[]>(this.peopleUrl, { params }).pipe(
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
