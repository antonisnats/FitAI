import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayout),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path:'dashboard',
                loadComponent:() => import('./features/dashboard/pages/dashboard/dashboard').then((m) => m.Dashboard)
            },
            {
                path:'wardrobe',
                loadComponent:() => import('./features/wardrobe/pages/wardrobe/wardrobe').then((m) => m.Wardrobe)
            },
            {
                path:'outfits',
                loadComponent:() => import('./features/outfits/pages/outfits/outfits').then((m)=> m.Outfits)
            },
            {
                path:'planner',
                loadComponent:() => import('./features/planner/pages/planner/planner').then((m)=> m.Planner)
            },
            {
                path:'weather',
                loadComponent:() => import('./features/weather/pages/weather/weather').then((m)=> m.Weather)
            },
            {
                path:'profile',
                loadComponent:() => import('./features/profile/pages/profile/profile').then((m)=> m.Profile)
            }
        ]
    },

    {
        path:'login',
        loadComponent:() => import('./features/auth/pages/login/login').then((m)=> m.Login)
    },
    {
        path:'register',
        loadComponent:() => import('./features/auth/pages/register/register').then((m)=> m.Register)
    },
    {
        path:'**',
        redirectTo:'dashboard'
    }
];
