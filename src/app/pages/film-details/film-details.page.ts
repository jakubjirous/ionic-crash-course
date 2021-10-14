import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../types/film';
import { ApiService } from '../../services/api/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.page.html',
    styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

    film: Film;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private emailComposer: EmailComposer) {
    }

    ngOnInit() {
        const filmId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getFilm(filmId).subscribe(response => {
            this.film = response;
        });
    }

    shareFilm() {
        const email = {
            to: 'info@jakubjirous.cz',
            subject: `I love this one ${this.film?.title}`,
            body: `Can you remember the opening?<br/><br/>"${this.film?.opening_crawl}"`,
            isHtml: true,
        }

        this.emailComposer.open(email);
    }
}
