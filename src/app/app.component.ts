import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    Modernizr
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title = 'Angular Modernizr Project';
  public Modernizr: any;
  public browserName: string;
  public windowNavigator: any;

  ngOnInit(): void {
    this.Modernizr = window.Modernizr;
    console.log('Modernizr : ', this.Modernizr);
    this.browserName = this.getBrowserName();
    this.windowNavigator = window.navigator;
  }

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'Edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'Opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'Chrome';
      case agent.indexOf('trident') > -1:
        return 'IE';
      case agent.indexOf('firefox') > -1:
        return 'Firefox';
      case agent.indexOf('safari') > -1:
        return 'Safari';
      default:
        return 'Other';
    }
  }

}
