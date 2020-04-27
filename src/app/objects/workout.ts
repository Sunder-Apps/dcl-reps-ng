import { Section } from './section';

export class Workout {
    constructor (
        description: string,
        sections: Section[],
        open: boolean = false,
        theme?: string,
        proTip?: string
    ) {}
}