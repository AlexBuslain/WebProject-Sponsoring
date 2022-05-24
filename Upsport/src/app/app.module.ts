import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Libraire permettant de gérer les formulaires dans Angular.
import { FormsModule } from '@angular/forms';

// Utilisation de la librairie HTTP Client pour pouvoir questionner mon serveur à distance.
import {HttpClientModule} from '@angular/common/http';
import { AccordComponent } from './accord/accord.component';
import { AccordAddComponent } from './accord-add/accord-add.component';
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteAddComponent } from './athlete-add/athlete-add.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';
import { AthleteViewComponent } from './athlete-view/athlete-view.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccordComponent,
    AccordAddComponent,
    AthleteComponent,
    AthleteAddComponent,
    AthleteEditComponent,
    AthleteViewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
