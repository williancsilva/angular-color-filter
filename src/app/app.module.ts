import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorValueComponent } from './color-value/color-value.component';
import { ColorBoxComponent } from './color-box/color-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorValueComponent,
    ColorBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
