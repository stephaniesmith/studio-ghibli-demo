import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
