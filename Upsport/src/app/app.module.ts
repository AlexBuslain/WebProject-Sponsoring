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
import { AccordViewComponent } from './accord-view/accord-view.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorAddComponent } from './sponsor-add/sponsor-add.component';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorViewComponent } from './sponsor-view/sponsor-view.component';
import { ContrepartieComponent } from './contrepartie/contrepartie.component';
import { ContrepartieAddComponent } from './contrepartie-add/contrepartie-add.component';
import { ContrepartieEditComponent } from './contrepartie-edit/contrepartie-edit.component';
import { ContrepartieViewComponent } from './contrepartie-view/contrepartie-view.component';
import { LinkComponent } from './link/link.component';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkViewComponent } from './link-view/link-view.component';


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
    AccordViewComponent,
    SponsorComponent,
    SponsorAddComponent,
    SponsorEditComponent,
    SponsorViewComponent,
    ContrepartieComponent,
    ContrepartieAddComponent,
    ContrepartieEditComponent,
    ContrepartieViewComponent,
    LinkComponent,
    LinkAddComponent,
    LinkViewComponent,

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
