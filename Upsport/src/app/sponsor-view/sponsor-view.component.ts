import { Component, Input, OnInit } from '@angular/core';
import { RestService, Sponsor } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-view',
  templateUrl: './sponsor-view.component.html',
  styleUrls: ['./sponsor-view.component.css']
})
export class SponsorViewComponent implements OnInit {

  @Input() sponsor!: Sponsor; // On récupère avec le @Input l'objet qui vient de la liste.
  showInfo = false;


  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewSponsor() {
    this.rest.viewSponsor(this.sponsor).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }


}
