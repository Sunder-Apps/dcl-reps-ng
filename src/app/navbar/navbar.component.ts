import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  open: boolean = false
  scrollScription = fromEvent(window, 'scroll')
                    .pipe(throttleTime(5000))
                    .subscribe(() => this.open = false)
  constructor(
    private router:Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.open = false;
      }
    })
  }

  ngOnInit() { }

}
