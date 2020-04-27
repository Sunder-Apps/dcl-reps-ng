import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pass: string = '666repslater'
  isSignedIn: boolean = false
  subject: Subject<boolean> = new Subject<boolean>()
  signedIn: Observable<boolean> = this.subject.asObservable()

  constructor(
    private storageService:StorageService
  ) {
    console.log(this.storageService.get('signedIn'))
    if (this.storageService.get('signedIn') == 'true') {
      this.signIn()
    }
  }

  checkPassword (val: string) : void {
    console.log(val, this.pass, val==this.pass)
    if (val == this.pass) {
      this.signIn()
    }
  }

  signIn () : void {
    console.log('signIn');
    this.isSignedIn = true;
    this.subject.next(this.isSignedIn);
    this.storageService.set('signedIn', 'true')
  }

  getSignedIn() : boolean {
    return this.isSignedIn
  }
}
