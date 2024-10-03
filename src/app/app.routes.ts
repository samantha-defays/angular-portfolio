import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'experiences',
        loadComponent: () => import('./experiences/experiences.component').then(m => m.ExperiencesComponent)
    },
    {
        path: 'formations',
        loadComponent: () => import('./formations/formations.component').then(m => m.FormationsComponent)
    },
    {
        path: 'competences',
        loadComponent: () => import('./competences/competences.component').then(m => m.CompetencesComponent)
    }
];