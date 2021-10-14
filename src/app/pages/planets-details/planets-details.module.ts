import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetsDetailsPageRoutingModule } from './planets-details-routing.module';

import { PlanetsDetailsPage } from './planets-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetsDetailsPageRoutingModule
  ],
  declarations: [PlanetsDetailsPage]
})
export class PlanetsDetailsPageModule {}
