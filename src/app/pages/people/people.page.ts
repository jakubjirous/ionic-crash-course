import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { IPeopleResponse, People } from '../../types/people';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.page.html',
    styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

    people: Observable<IPeopleResponse>;

    constructor(private router: Router, private api: ApiService, private utils: UtilsService) {
    }

    ngOnInit() {
        this.people = this.api.getAllPeople();
    }

    openDetails(people: People) {
        const peopleId = this.utils.getIdFromUrl(people?.url);
        this.router.navigateByUrl(`/tabs/people/${peopleId}`);
    }

}
