import { Component, OnInit } from '@angular/core';
import { RestService, Sponsor } from '../rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsors: Sponsor[] = [];
  sponsor!: Sponsor;
  show = false;
  showInfo = false;

  constructor( public rest:RestService, private router: Router) { }

  ngOnInit(): void {
    this.getSponsors(); // On va utiliser ce getSponsors pour remplir la liste de sponsors.
  }

  getSponsors() {
    // On va chercher les sponsors dans le service. On "subscribe" car on a créé un Observable dans le service et donc on vient s'abonner. 
    this.rest.getSponsors().subscribe(
      (resp) => { 
        console.log(resp)
        this.sponsors = resp;
      }
    )
  }

  addSponsor() {
    this.router.navigate(['/sponsor-add']);
  }


  deleteSponsor(id:number){
    this.rest.deleteSponsor(id).subscribe(res => {
         this.sponsors = this.sponsors.filter(item => item.sponsor_id !== id);
         console.log('Post deleted successfully!');
    })
  }

  viewSponsor() {
    this.rest.viewSponsor(this.sponsor).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

  showEditForm(sponsor: Sponsor) {
    this.show = !this.show;
    this.sponsor = sponsor;
    this.router.navigate(['/sponsor'])
  } 

  showInfoForm(sponsor: Sponsor) {
    this.showInfo = !this.showInfo;
    this.sponsor = sponsor;
    this.router.navigate(['/sponsor'])
  } 

}

