import { Routes } from '@angular/router';

export const postCodeAiRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./../shared/home/home.component').then((m)=> m.HomeComponent),
        title: 'Postcode Search',
    }
];
