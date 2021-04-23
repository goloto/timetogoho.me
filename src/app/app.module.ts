import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { MenuComponent } from './menu/menu.component';
import { UpperMenuComponent } from './menu/upper-menu/upper-menu.component';
import { BottomMenuComponent } from './menu/bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MenuComponent,
    UpperMenuComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
