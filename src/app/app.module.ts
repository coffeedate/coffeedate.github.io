import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { ProfileService as Profile} from './services/profile.service';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DateComponent } from './components/date/date.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SurveyComponent } from './components/survey/survey.component';
import { TrainingComponent } from './components/training/training.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FindingComponent } from './components/finding/finding.component';
import { ProfileComponent } from './components/profile/profile.component';

import {MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'finding', component: FindingComponent },
  { path: 'training', component: TrainingComponent},
  { path: 'signup', component:SignUpComponent},
  { path: 'date',      component: DateComponent, canActivate: [AuthGuard] },
  { path: 'onboarding',      component: OnboardingComponent, canActivate: [AuthGuard] },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    DateComponent,
    OnboardingComponent,
    SurveyComponent,
    TrainingComponent,
    SignUpComponent,
    FindingComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
  ],
  providers: [
    AuthGuard,
    ApiService,
    Profile
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
