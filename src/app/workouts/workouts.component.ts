import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';
import { WorkoutsService } from './workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  plan: Workout[] = []

  constructor(private workoutsService:WorkoutsService) {
    this.workoutsService.activePlan.subscribe(plan => {
      this.plan = plan;
    });
  }

  ngOnInit () {
    this.workoutsService.setActivePlan(this.workoutsService.activeIndex);
  }

  loadPlan (e) {
    this.workoutsService.loadPlan(e);
  }
}
