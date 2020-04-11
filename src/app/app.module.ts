import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip'

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
import { SettingsService } from './settings/settings.service';
import { StorageService } from './storage/storage.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundGradientComponent } from './background-gradient/background-gradient.component';
import { SafePipe } from './pipes/safe.pipe';
import { UrlSafePipe } from './pipes/url-safe.pipe';
import { WorkoutsComponent } from './workouts/workouts.component';

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
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [
    SettingsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
