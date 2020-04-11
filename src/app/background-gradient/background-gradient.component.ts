import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-background-gradient',
  templateUrl: './background-gradient.component.html',
  styleUrls: ['./background-gradient.component.less']
})
export class BackgroundGradientComponent implements OnInit {

  gradient:any[] = [
    {
      percent: 0,
      color: 'ffffff'
    },
    {
      percent: 33,
      color: '00abe9'
    },
    {
      percent: 66,
      color: 'd9308a'
    },
    {
      percent: 999,
      color: 'fff14b'
    }
  ]

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit () {
    
  }

  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(10))
                 .subscribe(() => this.setGradient())

  setGradient () : void {
    let r:number,
      g:number,
      b: number;
    let elements = document.getElementsByClassName('background-gradient')
    console.log(this.route.data)
    if (this.route.snapshot.data['backgroundGradient']) {
      let limit: number = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
        console.log(window.pageYOffset / limit)
      let ratio: number = (window.pageYOffset / limit)
      let closest = 0;
      for (var i = 0; i < this.gradient.length; i++) {
        if (ratio * 100 > this.gradient[i].percent) {
          console.log(i, ratio * 100)
          closest = i;
        }
      }
      console.log(closest, ratio, limit)
      var hex = function(x) {
        x = x.toString(16);
        return (x.length == 1) ? '0' + x : x;
      };
      console.log('ratio', ratio, ratio*(this.gradient.length-1), (ratio*(this.gradient.length-1)) - closest);
      r = Math.ceil(parseInt(this.gradient[closest+1].color.substring(0,2), 16) * ((ratio*(this.gradient.length-1)) - closest) + parseInt(this.gradient[closest].color.substring(0,2), 16) * (1-((ratio*(this.gradient.length-1)) - closest)));
      g = Math.ceil(parseInt(this.gradient[closest+1].color.substring(2,4), 16) * ((ratio*(this.gradient.length-1)) - closest) + parseInt(this.gradient[closest].color.substring(2,4), 16) * (1-((ratio*(this.gradient.length-1)) - closest)));
      b = Math.ceil(parseInt(this.gradient[closest+1].color.substring(4,6), 16) * ((ratio*(this.gradient.length-1)) - closest) + parseInt(this.gradient[closest].color.substring(4,6), 16) * (1-((ratio*(this.gradient.length-1)) - closest)));
      console.log(hex(r) + hex(g) + hex(b))
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('transition')
        elements[i].setAttribute('style', 'background-color: #' + hex(r) + hex(g) + hex(b)) 
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('transition')
        elements[i].setAttribute('style', '')
      }
    }
  }
}
