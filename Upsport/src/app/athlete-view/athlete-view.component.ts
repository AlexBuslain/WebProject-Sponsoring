import { Component, Input, OnInit } from '@angular/core';
import { RestService, Athlete } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-athlete-view',
  templateUrl: './athlete-view.component.html',
  styleUrls: ['./athlete-view.component.css']
})
export class AthleteViewComponent implements OnInit {

  @Input() athlete!: Athlete; // On récupère avec le @Input l'objet qui vient de la liste.
  showInfo = false;

  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewAthlete() {
    this.rest.viewAthlete(this.athlete).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

}
