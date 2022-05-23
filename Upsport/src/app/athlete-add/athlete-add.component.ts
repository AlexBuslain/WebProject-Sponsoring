import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-athlete-add',
  templateUrl: './athlete-add.component.html',
  styleUrls: ['./athlete-add.component.css']
})
export class AthleteAddComponent implements OnInit {

  athlete = { athlete_id: 0, nom:"", prenom:"",discipline:"",adresse:"", updatedAt: ''}

  // On instancie les différentes routes dans le constructeur. 
  constructor(public rest:RestService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  } 

  addAthlete() {
    this.rest.addAthlete(this.athlete).subscribe(
      (result) => {this.router.navigate(['/athlete']);}
    )
  }
}
