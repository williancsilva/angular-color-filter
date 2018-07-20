import { Component, OnInit, Input } from '@angular/core';
import { RedGreenBlue } from '../red-green-blue';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {

  @Input() rgb: RedGreenBlue;

  constructor() { }

  ngOnInit() {
  }

}
