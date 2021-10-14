import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsDetailsPage } from './planets-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsDetailsPageRoutingModule {}
