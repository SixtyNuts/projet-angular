import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeIncentivesComponent } from './home-incentives/home-incentives.component';
import { HomeActivitiesComponent } from './home-activities/home-activities.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeIncentiveComponent } from './home-incentive/home-incentive.component';
import { MenuComponent } from './menu/menu.component';
import { OverlayComponent } from './overlay/overlay.component';
import { HomeActivityCardComponent } from './home-activity-card/home-activity-card.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventsComponent } from './events/events.component';
import { FormFieldMessageComponent } from './shared/components/form-field-message/form-field-message.component';
import {FragmentPolyfillModule} from '../fragment-polyfill/fragment-polyfill.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeIntroComponent,
    HomeIncentivesComponent,
    HomeActivitiesComponent,
    FooterComponent,
    HomeComponent,
    HomeIncentiveComponent,
    MenuComponent,
    OverlayComponent,
    HomeActivityCardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    EventsComponent,
    FormFieldMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
