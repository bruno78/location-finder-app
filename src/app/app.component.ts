import { Component } from '@angular/core';
import { EventSpace } from './event-space/eventSpace';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">{{ title }}</md-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Location Finder';
}
