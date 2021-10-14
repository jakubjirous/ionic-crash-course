import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Film, IFilmsResponse } from '../../types/film';
import { IPeopleResponse, People } from '../../types/people';
import { environment } from '../../../environments/environment';
import { IPlanetResponse, Planet } from '../../types/planet';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getAllFilms(): Observable<IFilmsResponse> {
        return this.http.get(`${environment.apiUrl}/films`) as Observable<IFilmsResponse>;
    }

    getFilm(filmId: string): Observable<Film> {
        return this.http.get(`${environment.apiUrl}/films/${filmId}`) as Observable<Film>;
    }

    getAllPeople(): Observable<IPeopleResponse> {
        return this.http.get(`${environment.apiUrl}/people`) as Observable<IPeopleResponse>;
    }

    getPeople(personId: string): Observable<People> {
        return this.http.get(`${environment.apiUrl}/people/${personId}`) as Observable<People>;
    }

    getAllPlanets(): Observable<IPlanetResponse> {
        return this.http.get(`${environment.apiUrl}/planets`) as Observable<IPlanetResponse>;
    }

    getPlanet(planetId: string): Observable<Planet> {
        return this.http.get(`${environment.apiUrl}/planets/${planetId}`) as Observable<Planet>
    }
}
