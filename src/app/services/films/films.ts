import { Observable } from "rxjs";

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
    people: Observable<any[]>;
    species: string[];
    vehicles: string[];
}
