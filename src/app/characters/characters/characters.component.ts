import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  allCharactersObservable: Observable<any[]> = this.people.getCharacters();
  filteredCharacterObservable: Observable<any[]> = this.allCharactersObservable;

  constructor(private people: PeopleService) { }

  ngOnInit(): void {
  }

  getFilteredCharacter(filters): void {
    this.filteredCharacterObservable = this.people.getCharacters(filters);
  }

}
