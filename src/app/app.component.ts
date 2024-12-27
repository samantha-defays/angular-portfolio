import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CompetencesComponent } from './competences/competences.component';

@Component({
    selector: 'app-root',
    imports: [HomeComponent, FormationsComponent, ExperiencesComponent, CompetencesComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Samantha Defays';
}
