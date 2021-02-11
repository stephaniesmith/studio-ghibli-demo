import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterFiltersComponent } from './characters/character-filters/character-filters.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterFiltersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CharactersModule { }
