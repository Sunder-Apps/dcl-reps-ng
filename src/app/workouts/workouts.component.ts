import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Plan } from '../objects/plan';
import { DataService } from '../services/data.service';
import { AlertsService } from '../services/alerts.service';
import { Answer } from '../objects/alert';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  year: number
  month: number
  plan: Plan

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertsService: AlertsService,
    private dataService: DataService
  ) { }

  ngOnInit () {
    console.log('ngoninit in workouts')
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.year = Number(params.get('year'))
          this.month = Number(params.get('month'))
          console.log('workouts switchmap ', this.year, this.month)
          return this.dataService.setPlan(this.year, this.month)
        })
      )
      .subscribe(plan => {
        this.plan = plan
        if (this.plan.year != this.year.toString()
          || this.plan.month != this.month.toString()) {
            this.alertsService.push({
              alertId: 'alerts-workouts-redirect',
              alertClass: 'info',
              disabled: false,
              answer: Answer.NONE,
              title: 'That workout plan doesn\'t exist.',
              message: 'You have been redirected to your active workout plan.',
              acceptText: 'Okay'
            })
            this.router.navigate(['plans', this.plan.year.toString(), this.plan.month.toString(), 'workouts'])
          }
        console.log('workouts plan ', this.plan)
      })
  }
}
