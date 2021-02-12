import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/services/people/people';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: People[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
