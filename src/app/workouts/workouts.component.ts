import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  plan: Workout[] = []
  constructor() { }
  ngOnInit() { }

  loadWorkout (e) : void {
    console.log('loadWorkout', e.target.files[0]);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      if (fileReader.result) {
        let json = JSON.parse(fileReader.result.toString());
        if (json) {
          this.plan = json;
        }
      }
    }
    fileReader.readAsText(e.target.files[0])
  }
}
