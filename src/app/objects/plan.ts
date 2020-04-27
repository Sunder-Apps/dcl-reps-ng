import { Workout } from './workout';

export class Plan {
    constructor (
        public year: string,
        public month: string,
        public workouts: Workout[]
    ) {}
}
