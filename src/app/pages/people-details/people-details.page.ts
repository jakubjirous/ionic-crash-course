import { Component, OnInit } from '@angular/core';
import { People } from '../../types/people';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-people-details',
    templateUrl: './people-details.page.html',
    styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

    people: People;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
    }

    ngOnInit() {
        const peopleId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getPeople(peopleId).subscribe(response => {
            this.people = response;
        });
    }
}
