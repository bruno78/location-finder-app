import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventSpace = {
    id:  1,
    name: "West Room",
    capacity: 23,
    floor: 5,
    recording_capabilities: true,
    breakout_room: false,
    location: "Google"
  }

  constructor() { }

  ngOnInit() {
  }

}
