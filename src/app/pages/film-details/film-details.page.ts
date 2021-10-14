import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../types/film';
import { ApiService } from '../../services/api/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavoriteService } from '../../services/favorite/favorite.service';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.page.html',
    styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

    film: Film;
    isFavorite: boolean = false;
    filmId: string | null = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private api: ApiService,
        private emailComposer: EmailComposer,
        private favoriteService: FavoriteService
    ) {
    }

    ngOnInit() {
        this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getFilm(this.filmId).subscribe(response => {
            this.film = response;
        });

        this.favoriteService.isFavorite(this.filmId).then(isFavorite => {
            this.isFavorite = isFavorite
        });
    }

    favoriteFilm(): void {
        this.favoriteService.favoriteFilm(this.filmId).then(() => {
            this.isFavorite = true
        });
    }

    unfavoriteFilm(): void {
        this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
            this.isFavorite = false
        });
    }

    shareFilm(): void {
        const email = {
            to: 'info@jakubjirous.cz',
            subject: `I love this one ${this.film?.title}`,
            body: `Can you remember the opening?<br/><br/>"${this.film?.opening_crawl}"`,
            isHtml: true,
        }

        this.emailComposer.open(email);
    }
}
