import { Component, OnInit } from '@angular/core';
import { Workout } from './workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  plan: Workout[] = [
    {
      theme: "KILL",
      description: "Boxing, Calisthenics, Kickboxing, Functional cardio",
      sections: [
        {
          name: "Warm up",
          reps: [
            {
              exercises: [
                {
                  name: "Yoga Flow"
                }
              ]
            },
            {
              amount: "x3",
              exercises: [
                {
                  amount: "Max",
                  name: "Pull Up Bar Hang"
                },
                {
                  amount: "30 sec",
                  name: "Jump Rope"
                }
              ]
            },
            {
              amount: "x2",
              exercises: [
                {
                  amount: "10/leg",
                  name: "Walking lunge w/ waist twist"
                },
                {
                  amount: "10",
                  name: "Dynamic leg swings front to back per side"
                },
                {
                  amount: "10",
                  name: "Dynamic lateral leg swings per side"
                }
              ]
            }
          ]
        },
        {
          name: "Combat Circuit",
          reps: [
            {
              exercises: [
                {
                  amount: "3 min",
                  name: "Shadowboxing (straight & cross)"
                },
                {
                  amount: "Max time x3",
                  name: "Planche progression"
                },
                {
                  amount: "3 min",
                  name: "Kicking technique (inside and outside shin)"
                },
                {
                  amount: "Max time x3",
                  name: "Front lever progression"
                },
                {
                  amount: "3 min",
                  name: "Shadowboxing (add hooks)"
                },
                {
                  amount: "Max x3",
                  name: "Pistol squats per leg"
                },
                {
                  amount: "3 min",
                  name: "Kicking technique (add front and heel)"
                },
                {
                  amount: "Max x3",
                  name: "Knuckle push ups"
                },
                {
                  amount: "3 min",
                  name: "Shadow boxing (add uppercuts)"
                },
                {
                  amount: "10 x3",
                  name: "Plyo lunges"
                },
                {
                  amount: "3 min",
                  name: "Kicking technique (add hook, spin)"
                },
                {
                  amount: "Max x3",
                  name: "Push ups"
                },
                {
                  amount: "3 min",
                  name: "Combo kick boxing"
                },
                {
                  amount: "Max time",
                  name: "Jump rope"
                }
              ]
            }
          ]
        },
        {
          name: "Rest 3-5 minutes"
        },
        {
          name: "Cardio Circuit",
          description: "Carry the bodies, dig their graves, push them into the earth",
          reps: [
            {
              amount: "x2",
              exercises: [
                {
                  amount: "1 minute",
                  name: "Farmer carries (w/ buckets or weights)"
                },
                {
                  amount: "50 per side",
                  name: "Grave diggers with shovel or 50 KBS"
                },
                {
                  amount: "30 seconds",
                  name: "Second side plank"
                },
                {
                  amount: "10",
                  name: "Jump squats (dance on their grave)"
                }
              ]
            }
          ]
        },
        {
          name: "PM",
          reps: [
            {
              name: "Static stretching",
              exercises: [
                {
                  amount: "1 minute",
                  name: "Kneeling pec stretch"
                },
                {
                  amount: "1 minute",
                  name: "Sit and reach hamstring"
                },
                {
                  amount: "1 minute",
                  name: "Kneeling hip flexor / psoas"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() { }

}
