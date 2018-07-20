import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-value',
  templateUrl: './color-value.component.html',
  styleUrls: ['./color-value.component.css']
})
export class ColorValueComponent implements OnInit {

  constructor() { }

  @Input() label: string;
  @Input() initValue = '0';

  @Output() colorValue: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.sendColor(this.initValue);
  }

  sendColor(color: string): void {
    this.colorValue.emit(color);
  }

}
