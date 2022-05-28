import { Component, OnInit } from '@angular/core';
import { RestService, Link } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  

  links: Link[] = [];
  link!: Link;
  show = false;
  showInfo = false;

  constructor( public rest:RestService, private router: Router) { }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks() {
    // On va chercher les liens dans le service. On "subscribe" car on a créé un Observable dans le service et donc on vient s'abonner. 
    this.rest.getLinks().subscribe(
      (resp) => { 
        console.log(resp)
        this.links = resp;
      }
    )
  }

  addLink() {
    this.router.navigate(['/link-add']);
  }


  deleteLink(id:number){
    this.rest.deleteLink(id).subscribe(res => {
         this.links = this.links.filter(item => item.link_id !== id);
         console.log('Post deleted successfully!');
    })
  }

  viewLink() {
    this.rest.viewLink(this.link).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

  showEditForm(link: Link) {
    this.show = !this.show;
    this.link = link;
    this.router.navigate(['/link'])
  } 

  showInfoForm(link: Link) {
    this.showInfo = !this.showInfo;
    this.link = link;
    this.router.navigate(['/link'])
  } 

}

