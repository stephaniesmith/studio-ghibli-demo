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
  ages: string[] = [];
  eyeColors: string[] = [];
  hairColors: string[] = [];

  filterForm = this.formBuilder.group({
    gender: new FormControl(''),
    eyeColor: new FormControl(''),
    hairColor: new FormControl('')
  })

  @Output() filters = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getGenders();
    this.getAges();
    this.getEyeColor();
    this.getColor();
  }

  getGenders(): void {
    const genderArray = this.characters.map(({ gender }) => gender);
    this.genders = [...new Set(genderArray)];
  }

  getAges(): void {
    const ageArray = this.characters.map(({ age }) => age);
    this.ages = [...new Set(ageArray)];
  }

  getEyeColor(): void {
    const eyeColorArray = this.characters.map(({ eye_color }) => eye_color);
    this.eyeColors = [...new Set(eyeColorArray)];
  }

  getColor(): void {
    const hairColorArray = this.characters.map(({ hair_color }) => hair_color);
    this.hairColors = [...new Set(hairColorArray)];
  }

  onSubmit(): void {
    this.filters.emit(this.filterForm.value);
  };
}
