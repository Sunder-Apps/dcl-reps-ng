import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Subject, Observable } from 'rxjs';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  plans: Workout[][]
  activeIndex: number
  subject: Subject<Workout[]> = new Subject<Workout[]>()
  activePlan: Observable<Workout[]> = this.subject.asObservable()

  constructor(private storageService:StorageService) {
    this.plans = JSON.parse(storageService.get('plans')) || [];
    this.activeIndex = parseInt(storageService.get('activeIndex')) || -1;
    if (this.plans.length > 0) {
        this.setActivePlan(this.plans[this.activeIndex] ? this.activeIndex : this.plans.length - 1)
    }
  }

  setActivePlan (index:number) {
    if (index >= 0 && index < this.plans.length) {
      this.activeIndex = index;
      this.storageService.set('activeIndex', this.activeIndex.toString())
      this.subject.next(this.plans[this.activeIndex]) 
    }
  }

  loadPlan (e) : void {
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      if (fileReader.result) {
        let json = JSON.parse(fileReader.result.toString())
        if (json) {
          this.plans.push(json)
          this.storageService.set('plans', JSON.stringify(this.plans))
          this.setActivePlan(this.plans.length - 1)
        }
      }
    }
    fileReader.readAsText(e.target.files[0])
  }
}
