import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatChipsModule } from '@angular/material/chips'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { GoalsComponent } from './goals/goals.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './services/settings.service';
import { StorageService } from './services/storage.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundGradientComponent } from './background-gradient/background-gradient.component';
import { SafePipe } from './pipes/safe.pipe';
import { UrlSafePipe } from './pipes/url-safe.pipe';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AuthService } from './services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlansComponent } from './plans/plans.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { VideosComponent } from './videos/videos.component';
import { WorkoutComponent } from './workout/workout.component'
import { DataService } from './services/data.service';
import { ProgressService } from './services/progress.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    EquipmentComponent,
    GoalsComponent,
    NutritionComponent,
    HomeComponent,
    NotFoundComponent,
    SettingsComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundGradientComponent,
    SafePipe,
    UrlSafePipe,
    WorkoutsComponent,
    PlansComponent,
    ExercisesComponent,
    VideosComponent,
    WorkoutComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    SettingsService,
    StorageService,
    DataService,
    ProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
