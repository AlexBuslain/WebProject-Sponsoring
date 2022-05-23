import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Utilisation de la librairie HTTP Client pour pouvoir questionner mon serveur à distance.
import {HttpClientModule} from '@angular/common/http';
import { AccordComponent } from './accord/accord.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
