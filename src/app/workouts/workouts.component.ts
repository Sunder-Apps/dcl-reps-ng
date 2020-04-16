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
    },
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
                  name: "Shoulder rolls"
                },
                {
                  name: "Neck warm up circles"
                },
                {
                  name: "Lay down with knees up feet on the floor - move knees side to side 5 times"
                },
                {
                  name: "Full body stretch"
                },
                {
                  name: "Happy baby"
                },
                {
                  name: "Extend both legs straight up, roll ankles and wiggle toes, stretch hamstrings"
                },
                {
                  name: "Reach opposite hand to opposite foot 3 times per side"
                },
                {
                  name: "Hug knees in toward chest and rock side to side"
                },
                {
                  name: "Both knees twist to the right, arms extended, look left"
                },
                {
                  name: "Both knees twist to the left, arms extended, look right"
                },
                {
                  name: "Come to all 4’s and do 6 cat/cows"
                },
                {
                  name: "Downward dog"
                },
                {
                  name: "Upward dog"
                },
                {
                  name: "Child’s pose"
                },
                {
                  name: "Downward dog"
                },
                {
                  name: "Lunge forward with right leg"
                },
                {
                  name: "Bring left leg in line with right"
                },
                {
                  name: "Standing forward fold"
                },
                {
                  name: "Roll up slowly"
                },
                {
                  name: "Plank"
                },
                {
                  name: "Chatarunga"
                },
                {
                  name: "Cobra"
                },
                {
                  name: "Upward dog"
                },
                {
                  name: "Side plank"
                },
                {
                  name: "Other side plank"
                },
                {
                  name: "Plank"
                },
                {
                  name: "Lunge forward with right foot"
                },
                {
                  name: "Lunge forward with left foot"
                },
                {
                  name: "Standing forward fold or rag doll"
                },
                {
                  name: "Roll up one vertebrae at a time"
                },
                {
                  name: "Warrior 1"
                },
                {
                  name: "Warrior 2"
                },
                {
                  name: "Reverse warrior"
                },
                {
                  name: "Side angle warrior"
                },
                {
                  name: "Triangle"
                },
                {
                  name: "Warrior 3"
                },
                {
                  name: "Half Moon"
                },
                {
                  name: "Lizard pose w/ twist"
                },
                {
                  name: "Pigeon"
                },
                {
                  name: "*repeat on opposite side*"
                },
                {
                  name: "Tree Pose max per side (close eyes as progression)"
                },
                {
                  name: "Lay down on back - bridge pose"
                },
                {
                  name: "Wheel pose"
                },
                {
                  name: "Headstand or shoulder stand"
                },
                {
                  name: "Fish pose"
                },
                {
                  name: "Corpse pose"
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
                  name: "Steady state low intensity cardio such as walking or biking, if you can. If not, cleaning up your dooms day bunker, preparing food for the week, and planning out your mission to conquer this post apocalyptic wasteland are good enough. Remember to make sure your meal today is enough to sustain you for 24-48 hours. As said, I like a smoothie, salad, or bone broth with some oils."
                }
              ]
            }
          ]
        },
        {
          name: "Pro Tip",
          reps: [
            {
              exercises: [
                {
                  name: "Yoga is not only fantastic for you bodily function (of any kind) and mobility, serving you well in case you need to climb, duck, twist, and dodge from a horde of rabid undead. But it is really about the breath. Try to breathe exclusively through your nose, long deep inhales and long smooth exhales, maintaining a rhythm as much as possible through out your meditative practice. This will force your body and mind into self regulation and unlock ancient plague fighting powers. Breathe, motherfucker."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      theme: "SABBATH",
      description: "Rest, Recover, Read, Create",
      sections: [
        {
          description: "Not terribly much instruction on your day of keeping holy the Sabbath… other than to listen to them. Here are today’s recommendations & inspiration:",
          reps: [
            {
              exercises: [
                {
                  amount: "Listen",
                  name: "Sabbath Bloody Sabbth by Black Sabbath"
                }
              ]
            },
            {
              exercises: [
                {
                  amount: "Read",
                  name: "The Art of Expressing the Human Body by Bruce Lee"
                }
              ]
            },
            {
              exercises: [
                {
                  amount: "Quote",
                  name: "&ldquo;It's amazing how fast the world can go from bad to a total shit storm.&rdquo; &mdash; Zombieland"
                }
              ]
            }
          ]
        },
        {
          name: "Pro Tip",
          description: "Feel free to hit some more stretches if your body is telling you it needs them, or not.. learn how to instinctively listen to what your body needs. STAY HYDRATED!! With WATER!! Especially if you are trying a complete fast or liquid only fast today. Otherwise, remember your ONE meal around midday. If you want to try a total fast, but are not yet used to it, I recommend doing a smoothie or bone broth as your meal this week; moving to a total fast next week. Always be safe."
        },
        {
          description: "Plan out your training and nutrition for the next few days and practice mediation. Most importantly.. enjoy yourself."
        }
      ]
    },
    {
      theme: "KILL",
      description: "Footwork, Muay Thai (add knees and elbows), Calisthenics",
      sections: [
        {
          name: "Warm Up",
          reps: [
            {
              amount: "x3",
              exercises: [
                {
                  amount: "1 minute",
                  name: "Jump Rope"
                },
                {
                  amount: "1 minute",
                  name: "Pull up bar hang"
                }
              ]
            }
          ]
        },
        {
          name: "Footwork",
          description: "Important for dodging toxic landmines in the wasteland, and stepping over zombie entrails. If you have an agility ladder, use it. If not, paint one in blood on an acceptable surface.",
          reps: [
            {
              exercises: [
                {
                  name: "High Knees"
                },
                {
                  name: "Side Shuffle (both sides)"
                },
                {
                  name: "Backward Cycle"
                },
                {
                  name: "All Shuffle"
                },
                {
                  name: "One leg hops (both sides)"
                },
                {
                  name: "Long Jumps"
                },
                {
                  name: "In & Outs"
                },
                {
                  name: "Iggy Shuffle"
                }
              ]
            }
          ]
        },
        {
          name: "Combat",
          description: "Use a heavy bag today if you have one (or a body) if not, all shadow boing will do just fine.",
          reps: [
            {
              exercises: [
                {
                  amount: "5 min",
                  name: "Shadowboxing warm up"
                },
                {
                  amount: "100",
                  name: "Jabs"
                },
                {
                  amount: "100",
                  name: "crosses"
                },
                {
                  amount: "Max",
                  name: "Pull ups"
                },
                {
                  amount: "50",
                  name: "Speed Skaters"
                },
                {
                  amount: "100",
                  name: "Right Kicks (varying angles)"
                },
                {
                  amount: "100",
                  name: "Left Kicks (varying angles)"
                },
                {
                  amount: "Max",
                  name: "Finger tip push ups"
                },
                {
                  amount: "Max",
                  name: "V-Sit"
                },
                {
                  amount: "10 min",
                  name: "Kickboxing combos"
                },
                {
                  amount: "2 min",
                  name: "Front lever practice"
                },
                {
                  amount: "2 min",
                  name: "Planche practice (use bars, dumbells, or buckets)"
                },
                {
                  amount: "5 min",
                  name: "Shadowboxing cooldown"
                }
              ]
            }
          ]
        },
        {
          name: "Rest 2 minutes",
          reps: [
            {
              amount: "x3",
              exercises: [
                {
                  name: "Side/side lunge balance"
                },
                {
                  amount: "2 min",
                  name: "Single side farmer walks"
                }
              ]
            }
          ]
        },
        {
          name: "PM",
          description: "Static stretching"
        }
      ]
    },
    {
      theme: "CONTAIN",
      description: "Functional strength, kettlebell, conditioning , and hypertrophy",
      sections: [
        {
          name: "Warm Up",
          reps: [
            {
              exercises: [
                {
                  amount: "20",
                  name: "Frankensteins"
                },
                {
                  amount: "5",
                  name: "KB Goblet Squat holds (pry hips open)"
                },
                {
                  amount: "5 (per side)",
                  name: "KB haloes"
                },
                {
                  amount: "20",
                  name: "KBS"
                }
              ]
            }
          ]
        },
        {
          name: "Raise the Dead",
          reps: [
            {
              amount: "x5",
              exercises: [
                {
                  amount: "5 (per side)",
                  name: "KB Turkish Get Ups"
                }
              ]
            },
            {
              amount: "x3",
              exercises: [
                {
                  amount: "6",
                  name: "Single Arm Rows"
                },
                {
                  amount: "6",
                  name: "Single Arm Push Up"
                }
              ]
            },
            {
              amount: "x4",
              exercises: [
                {
                  amount: "10",
                  name: "Incline Fly"
                },
                {
                  amount: "10",
                  name: "Pullups"
                },
                {
                  amount: "10",
                  name: "Thrusters"
                }
              ]
            }
          ]
        },
        {
          name: "Circuit",
          reps: [
            {
              exercises: [
                {
                  amount: "1 min",
                  name: "Walking Lunge"
                },
                {
                  amount: "1 min",
                  name: "Band Bicep Curls"
                },
                {
                  amount: "1 min",
                  name: "Band Tricep Pushdowns"
                },
                {
                  amount: "1 min",
                  name: "Hollow Hold"
                },
                {
                  amount: "1 min",
                  name: "Burpees"
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
