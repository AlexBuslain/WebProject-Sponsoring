import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import ACCORD
import { AccordComponent } from './accord/accord.component';
import { AccordAddComponent } from './accord-add/accord-add.component';
import { AccordEditComponent } from './accord-edit/accord-edit.component';
import { AccordViewComponent } from './accord-view/accord-view.component';
// Import ATHLETE
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteAddComponent } from './athlete-add/athlete-add.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';
import { AthleteViewComponent } from './athlete-view/athlete-view.component';
// Import SPONSOR
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorAddComponent } from './sponsor-add/sponsor-add.component';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorViewComponent } from './sponsor-view/sponsor-view.component';
// Import HOME
import { HomeComponent } from './home/home.component';



// Tableau d'objets (Routes)
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { // ---------------- ACCORD ---------------- //
    path:'accord',
    component: AccordComponent
  },
  {
    path:'accord-add',
    component: AccordAddComponent 
  },
  {
    path:'accord-edit',
    component: AccordEditComponent
  },
  {
    path:'accord-view',
    component: AccordViewComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { // ---------------- ATHLETE ---------------- //
    path:'athlete',
    component: AthleteComponent
  },
  {
    path:'athlete-add',
    component: AthleteAddComponent 
  },
  {
    path: 'athlete-edit/:athlete_id',
    component: AthleteEditComponent
  },
  {
    path: 'athlete-view/:athlete_id',
    component: AthleteViewComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { // ---------------- SPONSOR ---------------- //
    path:'sponsor',
    component: SponsorComponent
  },
  {
    path:'sponsor-add',
    component: SponsorAddComponent 
  },
  {
    path: 'sponsor-edit/:sponsor',
    component: SponsorEditComponent
  },
  {
    path: 'sponsor-view/:sponsor',
    component: SponsorViewComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
