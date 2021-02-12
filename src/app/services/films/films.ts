import { Observable } from "rxjs";
import { People } from "../people/people";

export interface Film {
    id: string;
    title: string;
    description: string;
    director: string;
    release_date: string;
    rt_score: string;
}

export interface FilmDetail extends Film {
    producer: string;
    url: string;
    locations: string[];
    species: string[];
    vehicles: string[];
}

export interface FilmWithoutPeople extends FilmDetail {
    people: string[];
}

export interface FilmWithPeople extends FilmDetail {
    people: Observable<People>[];
}
