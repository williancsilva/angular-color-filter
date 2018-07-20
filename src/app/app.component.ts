import { Component } from '@angular/core';
import { RedGreenBlue } from './red-green-blue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: RedGreenBlue = new RedGreenBlue();
}
