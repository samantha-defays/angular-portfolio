import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    imports: [HomeComponent, ProfileComponent, FormationsComponent, ExperiencesComponent, CompetencesComponent, ContactComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Samantha Defays';
}
