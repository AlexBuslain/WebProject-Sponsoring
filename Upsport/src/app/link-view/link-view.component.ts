import { Component, Input, OnInit } from '@angular/core';
import { RestService, Link } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.css']
})
export class LinkViewComponent implements OnInit {

  @Input() link!: Link; // On récupère avec le @Input l'objet qui vient de la liste.
  showInfo = false;

  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewLink() {
    this.rest.viewLink(this.link).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

}
