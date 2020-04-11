import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { GoalsComponent } from './goals/goals.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NutritionComponent } from './nutrition/nutrition.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home'
    }
  },
  {
    path: 'overview',
    component: OverviewComponent,
    data: {
      animation: 'overview',
      backgroundGradient: true
    }
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
    data: {
      animation: 'equipment'
    }
  },
  {
    path: 'goals',
    component: GoalsComponent,
    data: {
      animation: 'goals'
    }
  },
  {
    path: 'nutrition',
    component: NutritionComponent,
    data: {
      animation: 'goals'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      animation: 'not-found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
