import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../types/film';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.page.html',
    styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

    film: Film;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    }

    ngOnInit() {
        const filmId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getFilm(filmId).subscribe(response => {
            this.film = response;
        });
    }
}
