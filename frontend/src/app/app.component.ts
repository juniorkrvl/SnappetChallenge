import { Component } from '@angular/core';

@Component({
  selector: 'sc-app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}