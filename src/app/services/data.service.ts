import { Injectable } from '@angular/core'
import { StorageService } from './storage.service'
import { Plan } from '../objects/plan'
import { Subject, Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private startYear: number = 2020
  private startMonth: number = 4
  private year: number
  private month: number
  private activeYear: number
  private activeMonth: number
  private subActivePlan: Subject<Plan> = new Subject<Plan>()
  obsActivePlan: Observable<Plan> = this.subActivePlan.asObservable()
  
  constructor (
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {
    this.init()
    if (this.validDate(this.activeYear, this.activeMonth)) {
      this.setPlan(this.activeYear, this.activeMonth)
    } else {
      this.setPlan(this.year, this.month)
    }
  }

  private init (): void {
    this.activeYear = parseInt(this.storageService.get('activeYear')) || -1
    this.activeMonth = parseInt(this.storageService.get('activeMonth')) || -1
    this.year = new Date().getFullYear()
    this.month = new Date().getMonth() + 1
  }

  private validDate (year: number, month: number): boolean {
    if (year > this.year
      || year == this.year && month > this.month
      || this.activeYear == this.startYear && this.activeMonth < this.startMonth
      || this.activeYear < this.startYear)
      return false
    return true
  }

  setPlan (year: number, month: number): Observable<Plan> {
    if (this.validDate(year, month)) {
      this.getPlan(year, month).subscribe(plan => {
        this.activeYear = year
        this.activeMonth = month
        this.storageService.set('activeYear', year.toString())
        this.storageService.set('activeMonth', month.toString())
        this.subActivePlan.next(plan)
      })
    }
    return this.obsActivePlan
  }

  getPlan (year: number, month: number): Observable<Plan> {
    return this.httpClient.get<Plan>(`assets/plans/${year}/${month}.json`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError (error) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}