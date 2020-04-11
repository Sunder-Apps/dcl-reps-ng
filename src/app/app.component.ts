import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { RouterAnimations } from './anime/anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    RouterAnimations
  ]
})
export class AppComponent {
  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(200))
                 .subscribe(() => this.onScrollEvent())

  constructor (private router:Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(this.onScrollEvent, 800);
      }
    })
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onScrollEvent() {
    let elements = document.getElementsByClassName('vp-fade-in')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top < window.innerHeight * 3 / 4) {
        elements[i].classList.add('visible')
      }
    }
  }
}
