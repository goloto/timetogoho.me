import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { MenuComponent } from './menu/menu.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { BottomMenuComponent } from './menu/bottom-menu/bottom-menu.component';
import { ArrowButtonComponent } from './menu/arrow-button/arrow-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MenuComponent,
    TopMenuComponent,
    BottomMenuComponent,
    ArrowButtonComponent
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
