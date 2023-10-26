import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule)
  },
  {
    path: 'competences',
    loadChildren: () => import('./competences/competences.module').then(m => m.CompetencesModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
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
