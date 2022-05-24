import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordComponent } from './accord/accord.component';
import { AccordAddComponent } from './accord-add/accord-add.component';
import { AthleteComponent } from './athlete/athlete.component';
import { AthleteAddComponent } from './athlete-add/athlete-add.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';
import { AthleteViewComponent } from './athlete-view/athlete-view.component';
import { HomeComponent } from './home/home.component';



// Tableau d'objets (Routes)
const routes: Routes = [
  { // ---------------- ACCORD ---------------- //
    path:'accord',
    component: AccordComponent
  },
  {
    path:'accord-add',
    component: AccordAddComponent 
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/accord',
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
  {
    path: 'home',
    component: HomeComponent
  },
  { // Redirection si rien n'est mis
    path: '',
    redirectTo: '/athlete',
    pathMatch: 'full'
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
