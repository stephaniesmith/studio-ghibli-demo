import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/app/services/people/people';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  allCharactersObservable: Observable<People[]> = this.people.getCharacters();
  filteredCharacterObservable: Observable<People[]> = this.allCharactersObservable;

  constructor(private people: PeopleService) { }

  ngOnInit(): void {
  }

  getFilteredCharacter(filters): void {
    this.filteredCharacterObservable = this.people.getCharacters(filters);
  }

}
