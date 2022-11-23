import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { BookComponent } from './components/book/book.component';
import { DisabledComponent } from './components/disabled/disabled.component';
import { HeartComponent } from './components/heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    BookComponent,
    DisabledComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
