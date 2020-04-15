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
          description: "Static stretching",
          reps: [
            {
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
    },
    {
      theme: "CONTAIN",
      description: "Pull strength, Isometrics, Core, & Conditioning",
      sections: [
        {
          name: "Warm up",
          reps: [
            {
              exercises: [
                {
                  name: "Yoga Flow"
                },
                {
                  amount: "10",
                  name: "PVC pipe or band shoulder pass throughs"
                },
                {
                  amount: "10 per direction, per side",
                  name: "PVC pipe circles"
                },
                {
                  amount: "5 per side",
                  name: "Fire hydrants"
                },
                {
                  amount: "5 per direction, per side",
                  name: "Kneeling hip circles"
                },
                {
                  amount: "5 per side",
                  name: "Birddogs w/ 2 second pause"
                },
                {
                  amount: "10",
                  name: "Lying cross body kicks"
                }
              ]
            }
          ]
        },
        {
          name: "Flesh eating muscle mayhem",
          reps: [
            {
              amount: "x5",
              exercises: [
                {
                  amount: "Max",
                  name: "(Weighted) pull ups"
                },
                {
                  name: "Shoulder press"
                }
              ]
            },
            {
              amount: "x4",
              exercises: [
                {
                  amount: "6 per side",
                  name: "Single Leg Cross - Body KB Deadlift"
                },
                {
                  amount: "6 per side",
                  name: "Single Arm KB Snatches"
                }
              ]
            },
            {
              amount: "x3",
              exercises: [
                {
                  amount: "10",
                  name: "Skull crushers w/ dragon flag"
                },
                {
                  name: "AMAP L-Sit Chin Up"
                }
              ]
            },
            {
              amount: "x2",
              exercises: [
                {
                  amount: "8",
                  name: "Reverse grip bench press or push ups"
                },
                {
                  amount: "8",
                  name: "Bent over KB rows"
                }
              ]
            },
            {
              exercises: [
                {
                  amount: "Max",
                  name: "Handstand hold"
                },
                {
                  amount: "50",
                  name: "Goblin squats"
                }
              ]
            }
          ]
        },
        {
          name: "Rest 3-5 minutes",
          reps: [
            {
              exercises: [
                {
                  amount: "3 minutes Max",
                  name: "Burpees"
                }
              ]
            }
          ]
        },
        {
          name: "PM",
          reps: [
            {
              exercises: [
                {
                  amount: "5 minutes",
                  name: "Grip strength trainer"
                },
                {
                  amount: "10 minutes",
                  name: "Static stretches"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      theme: "EXTERMINATE",
      description: "Run for your life",
      sections: [
        {
          name: "Warm up",
          reps: [
            {
              exercises: [
                {
                  name: "Alternating side lunges"
                },
                {
                  name: "Walking lunge w/ hip circles"
                },
                {
                  amount: "10 min",
                  name: "Light job"
                }
              ]
            }
          ]
        },
        {
          name: "Zombie sprints (outdoors or on treadmill)",
          reps: [
            {
              amount: "x6",
              exercises: [
                {
                  amount: "30 sec",
                  name: "Max effort"
                },
                {
                  amount: "2 min",
                  name: "Walk"
                }
              ]
            },
            {
              exercises: [
                {
                  amount: "5 min",
                  name: "Double under / jump rope skill practice"
                },
                {
                  amount: "10 min",
                  name: "Shadowboxing technique"
                }
              ]
            }
          ]
        },
        {
          name: "PM",
          description: "Bruce Lee Ab Circuit",
          reps: [
            {
              amount: "x2",
              exercises: [
                {
                  amount: "20",
                  name: "V-ups"
                },
                {
                  amount: "30 sec",
                  name: "Hollow hold"
                },
                {
                  amount: "20",
                  name: "Scissor kicks"
                },
                {
                  amount: "30",
                  name: "Bicycle kicks"
                },
                {
                  amount: "20",
                  name: "Leg lifts"
                },
                {
                  amount: "30",
                  name: "Russian twists"
                }
              ]
            },
            {
              amount: "x5",
              exercises: [
                {
                  amount: "5",
                  name: "Dragon flag"
                }
              ]
            },
            {
              exercises: [
                {
                  name: "Static stretching"
                }
              ]
            }
          ]
        }
      ]
    }/*,
    {
      theme: "SURVIVE",
      description: "Yoga & Breathing",
      sections: [
        {
          name: "Yoga",
          reps: [
            {
              amount: "1 hour",
              exercises: [
                {
                  name: "Start sitting cross legged"
                },
                {
                  name: ""
                },
              ]
            }
          ]
        }
      ]
    }*/
  ]
  constructor() { }

  ngOnInit() { }

}
