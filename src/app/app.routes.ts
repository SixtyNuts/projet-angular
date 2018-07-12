import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventsComponent } from './events/events.component';
import {RealTimeLoggedInGuard} from './shared/services/real-time-logged-in-guard.service';
import {IsAnonymousGuardGuard} from './shared/services/is-anonymous-guard.guard';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [IsAnonymousGuardGuard]
    },
    {
        path: 'connexion',
        component: SignInComponent,
        pathMatch: 'full',
        canActivate: [IsAnonymousGuardGuard],
        data: {
            menuDisabled: true
        }
    },
    {
        path: 'inscription',
        component: SignUpComponent,
        pathMatch: 'full',
        canActivate: [IsAnonymousGuardGuard],
        data: {
            menuDisabled: true
        }
    },
    {
        path: 'mot-de-passe-oublie',
        component: ForgotPasswordComponent,
        pathMatch: 'full',
        canActivate: [IsAnonymousGuardGuard]
    },
    {
        path: 'evenements',
        component: EventsComponent,
        pathMatch: 'full',
        canActivate: [RealTimeLoggedInGuard]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
