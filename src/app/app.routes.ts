import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventsComponent } from './events/events.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'connexion',
        component: SignInComponent,
        pathMatch: 'full'
    },
    {
        path: 'inscription',
        component: SignUpComponent,
        pathMatch: 'full'
    },
    {
        path: 'mot-de-passe-oublie',
        component: ForgotPasswordComponent,
        pathMatch: 'full'
    },
    {
        path: 'evenements',
        component: EventsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    }
];
