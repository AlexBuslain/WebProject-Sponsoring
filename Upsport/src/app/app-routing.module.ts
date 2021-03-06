import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import ACCORD
import { AccordComponent } from './accord/accord.component';
import { AccordAddComponent } from './accord-add/accord-add.component';
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
// Import CONTREPARTIE
import { ContrepartieComponent } from './contrepartie/contrepartie.component';
import { ContrepartieAddComponent } from './contrepartie-add/contrepartie-add.component';
import { ContrepartieEditComponent } from './contrepartie-edit/contrepartie-edit.component';
import { ContrepartieViewComponent } from './contrepartie-view/contrepartie-view.component';
// Import LINK
import { LinkComponent } from './link/link.component';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkViewComponent } from './link-view/link-view.component';

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
    path:'accord-view/:accord_id',
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
    path: 'sponsor-edit/:sponsor_id',
    component: SponsorEditComponent
  },
  {
    path: 'sponsor-view/:sponsor_id',
    component: SponsorViewComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { // ---------------- CONTREPARTIE ---------------- //
    path:'contrepartie',
    component: ContrepartieComponent
  },
  {
    path:'contrepartie-add',
    component: ContrepartieAddComponent 
  },
  {
    path: 'contrepartie-edit/:contrepartie',
    component: ContrepartieEditComponent
  },
  {
    path: 'contrepartie-view/:contrepartie',
    component: ContrepartieViewComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { // ---------------- LIEN ---------------- //
    path:'link',
    component: LinkComponent
  },
  {
    path:'link-add',
    component: LinkAddComponent 
  },
  {
    path: 'link-view/:link',
    component: LinkViewComponent
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
