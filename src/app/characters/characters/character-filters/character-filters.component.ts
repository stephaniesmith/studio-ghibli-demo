import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-filters',
  templateUrl: './character-filters.component.html',
  styleUrls: ['./character-filters.component.scss']
})
export class CharacterFiltersComponent implements OnInit {
  @Input() characters: any[] = [];
  genders: string[] = [];

  filterForm = this.formBuilder.group({
    gender: new FormControl('')
  })

  @Output() filters = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getGenders();
  }

  getGenders(): void {
    const genderArray = this.characters.map(({ gender }) => gender);
    this.genders = [...new Set(genderArray)];
  }

  onSubmit(): void {
    this.filters.emit(this.filterForm.value);
  };
}
