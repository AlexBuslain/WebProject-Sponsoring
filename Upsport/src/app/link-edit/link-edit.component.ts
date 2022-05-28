import { Component, Input, OnInit } from '@angular/core';
import { RestService, Link } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.css']
})
export class LinkEditComponent implements OnInit {

  @Input() link!: Link; // On récupère avec le @Input l'objet qui vient de la liste.

  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateLink() {
    this.rest.updateLink(this.link).subscribe(
      (result) => {this.router.navigate(['/accord']);}
    )
  }

}
