import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitchcomp',
  templateUrl: './lightswitchcomp.component.html',
  styleUrls: ['./lightswitchcomp.component.css']

})
export class LightswitchcompComponent implements OnInit {

  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
