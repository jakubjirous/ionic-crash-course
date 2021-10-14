import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() {
    }

    getIdFromUrl(url: string): string {
        const split = url.split('/');
        return split[split?.length - 2];
    }

}
