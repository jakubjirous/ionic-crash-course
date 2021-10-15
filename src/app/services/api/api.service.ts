import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Film, IFilmsResponse } from '../../types/film';
import { IPeopleResponse, People } from '../../types/people';
import { IPlanetResponse, Planet } from '../../types/planet';
import { ErrorService } from '../error/error.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private error: ErrorService) {
    }

    getAllFilms(): Observable<IFilmsResponse> {
        return this.http.get<IFilmsResponse>(`${environment.apiUrl}/films`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }

    getFilm(filmId: string): Observable<Film> {
        return this.http.get<Film>(`${environment.apiUrl}/films/${filmId}`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }

    getAllPeople(): Observable<IPeopleResponse> {
        return this.http.get<IPeopleResponse>(`${environment.apiUrl}/people`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }

    getPeople(personId: string): Observable<People> {
        return this.http.get<People>(`${environment.apiUrl}/people/${personId}`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }

    getAllPlanets(): Observable<IPlanetResponse> {
        return this.http.get<IPlanetResponse>(`${environment.apiUrl}/planets`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }

    getPlanet(planetId: string): Observable<Planet> {
        return this.http.get<Planet>(`${environment.apiUrl}/planets/${planetId}`).pipe(
            catchError((error) => {
                const errorMsg = this.error.getErrorMessage(error);
                this.error.logErrorMessage(errorMsg);
                return throwError(errorMsg);
            })
        );
    }
}
