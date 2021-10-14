import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { UtilsService } from '../../services/utils/utils.service';
import { Observable } from 'rxjs';
import { IPlanetResponse, Planet } from '../../types/planet';

@Component({
    selector: 'app-planets',
    templateUrl: './planets.page.html',
    styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

    planets: Observable<IPlanetResponse>;

    constructor(private router: Router, private api: ApiService, private utils: UtilsService) {
    }

    ngOnInit() {
        this.planets = this.api.getAllPlanets();
    }

    openDetails(planet: Planet) {
        const planetId = this.utils.getIdFromUrl(planet?.url);
        this.router.navigateByUrl(`/tabs/planets/${planetId}`);
    }
}
