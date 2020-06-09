import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: (
  arg0: string,
  arg1: string,
  arg2: { page_path: string }
) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'annovich-github-io-app';
  constructor(private gaRouter: Router) {
    this.gaRouter.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-168836281-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
