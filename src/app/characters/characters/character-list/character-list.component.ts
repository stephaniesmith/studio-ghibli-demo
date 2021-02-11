import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  charactersObservable: Observable<any[]> = this.people.getCharacters();

  constructor(private people: PeopleService) { }

  ngOnInit(): void {
  }
}
