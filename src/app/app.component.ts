import { Component } from '@angular/core';
import { EventSpace } from './event-space/eventSpace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Location Finder';
  eventSpace = {
    id:  1,
    name: "West Room",
    capacity: 23,
    floor: 5,
    recording_capabilities: true,
    breakout_room: false,
    location: "Google"
  }
}
