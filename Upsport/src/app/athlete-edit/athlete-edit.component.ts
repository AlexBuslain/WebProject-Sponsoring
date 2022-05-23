import { Component, Input, OnInit } from '@angular/core';
import { RestService, Athlete } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-athlete-edit',
  templateUrl: './athlete-edit.component.html',
  styleUrls: ['./athlete-edit.component.css']
})
export class AthleteEditComponent implements OnInit {

  @Input() athlete!: Athlete; // On récupère avec le @Input l'objet qui vient de la liste.
  
    // On instancie les différentes routes dans le constructeur. 
  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { // Autre possibilité si on veut edit.
    // this.rest.getAthlete(this.route.snapshot.params.athlete_id).subscribe(
     // (data) => { 
     //   console.log(data[0]);
     //   this.athlete = data[0];
     // }
    //)
  }

  updateAthlete() {
    this.rest.updateAthlete(this.athlete).subscribe(
      (result) => {this.router.navigate(['/athlete']);}
    )
  }

}
