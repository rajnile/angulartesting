import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightswitchcompComponent } from './lightswitchcomp/lightswitchcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    LightswitchcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
