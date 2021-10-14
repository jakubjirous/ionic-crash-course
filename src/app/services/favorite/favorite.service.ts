import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'favoriteFilms';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    constructor(private storage: Storage) {
        this.init()
    }

    async init() {
        await this.storage.create();
    }

    getAllFavouriteFilms(): Promise<string[]> {
        return this.storage.get(STORAGE_KEY);
    }

    isFavorite(filmId: string): Promise<boolean> {
        return this.getAllFavouriteFilms().then(result => {
            return result && result.indexOf(filmId) !== -1;
        });
    }

    favoriteFilm(filmId: string) {
        return this.getAllFavouriteFilms().then(result => {
            if (result) {
                result.push(filmId)
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [filmId]);
            }
        })
    }

    unfavoriteFilm(filmId: string) {
        return this.getAllFavouriteFilms().then(result => {
            if (result) {
                const index = result.indexOf(filmId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        })
    }
}
