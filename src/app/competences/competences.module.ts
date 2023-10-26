import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencesRoutingModule } from './competences-routing.module';
import { CompetencesComponent } from './competences.component';


@NgModule({
  declarations: [
    CompetencesComponent
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule
  ]
})
export class CompetencesModule { }
