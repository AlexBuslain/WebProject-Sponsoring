import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-add',
  templateUrl: './sponsor-add.component.html',
  styleUrls: ['./sponsor-add.component.css']
})
export class SponsorAddComponent implements OnInit {

  sponsor = { sponsor_id: 0, nom:"",adresse:"", updatedAt: '', createdAt: '',}

// On instancie les différentes routes dans le constructeur. 
constructor(public rest:RestService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }

  addSponsor() {
    this.rest.addSponsor(this.sponsor).subscribe(
      (result) => {this.router.navigate(['/sponsor']);}
    )
  }

}
