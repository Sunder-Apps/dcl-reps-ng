import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { GoalsComponent } from './goals/goals.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { PlansComponent } from './plans/plans.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';
import { PlanComponent } from './plan/plan.component';

const date = new Date()
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    /*component: HomeComponent,
    data: {
      animation: 'home'
    }*/
    redirectTo: '/plans/2020/04/workouts'
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
      animation: 'nutrition'
    }
  },
  {
    path: 'plans',
    component: PlansComponent,
    data: {
      animation: 'plans'
    }
  },
  {
    path: 'plans/:year/:month',
    component: PlanComponent,
    data: {
      animation: 'plan'
    }
  },
  {
    path: 'plans/:year/:month/workouts',
    component: WorkoutsComponent,
    data: {
      animation: 'workouts'
    }
  },
  {
    path: 'plans/:year/:month/workouts/:day',
    component: WorkoutComponent,
    data: {
      animation: 'workout'
    }
  },
  {
    path: 'exercises/:exercise',
    component: ExercisesComponent,
    data: {
      animation: 'exercises'
    }
  },
  {
    path: '**',
    /*component: NotFoundComponent,
    data: {
      animation: 'not-found'
    }*/
    redirectTo: '/plans/2020/04/workouts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
