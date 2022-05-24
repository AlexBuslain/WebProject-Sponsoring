import { Component, Input, OnInit } from '@angular/core';
import { RestService, Sponsor } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-edit',
  templateUrl: './sponsor-edit.component.html',
  styleUrls: ['./sponsor-edit.component.css']
})
export class SponsorEditComponent implements OnInit {

  @Input() sponsor!: Sponsor; // On récupère avec le @Input l'objet qui vient de la liste.


// On instancie les différentes routes dans le constructeur. 
constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  updateSponsor() {
    this.rest.updateSponsor(this.sponsor).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

}
