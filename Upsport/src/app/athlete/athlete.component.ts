import { Component, OnInit } from '@angular/core';
import { RestService, Athlete } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  athletes: Athlete[] = [];
  athlete!: Athlete;
  show = false;

  constructor( public rest:RestService, private router: Router) { }

  // On utilise à partir du moment où on démarre avec la méthode ngOnInit
  ngOnInit(): void {
    this.getAthletes(); // On va utiliser ce getAccords pour remplir la liste d'athlete.
  }

  getAthletes() {
    // On va chercher les athlètes dans le service. On "subscribe" car on a créé un Observable dans le service et donc on vient s'abonner. 
    this.rest.getAthletes().subscribe(
      (resp) => { 
        console.log(resp)
        this.athletes = resp;
      }
    )
  }

  addAthlete() {
    this.router.navigate(['/athlete-add']);
  }


  deleteAthlete(id:number){
    this.rest.deleteAthlete(id).subscribe(res => {
         this.athletes = this.athletes.filter(item => item.athlete_id !== id);
         console.log('Post deleted successfully!');
    })
  }

  showEditForm(athlete: Athlete) {
    this.show = !this.show;
    this.athlete = athlete;
    this.router.navigate(['/athlete'])
  } 


}
