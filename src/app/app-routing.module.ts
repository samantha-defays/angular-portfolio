import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'formations',
    component: FormationsComponent,
  },
  {
    path: 'competences',
    component: CompetencesComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
