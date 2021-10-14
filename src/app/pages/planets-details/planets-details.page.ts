import { Component, OnInit } from '@angular/core';
import { Planet } from '../../types/planet';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-planets-details',
    templateUrl: './planets-details.page.html',
    styleUrls: ['./planets-details.page.scss'],
})
export class PlanetsDetailsPage implements OnInit {

    planet: Planet;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    }

    ngOnInit() {
        const planetId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getPlanet(planetId).subscribe(response => {
            this.planet = response;
        });
    }
}
