import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film, IFilmsResponse } from '../../types/film';
import { ApiService } from '../../services/api/api.service';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
    selector: 'app-films',
    templateUrl: './films.page.html',
    styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

    films: Observable<IFilmsResponse>;

    constructor(private router: Router, private api: ApiService, private utils: UtilsService) {
    }

    ngOnInit() {
        this.films = this.api.getAllFilms();
    }

    openDetails(film: Film) {
        const filmId = this.utils.getIdFromUrl(film?.url);
        this.router.navigateByUrl(`/tabs/films/${filmId}`);
    }

    goToPlanets() {
        this.router.navigateByUrl(`/tabs/planets`);
    }
}
