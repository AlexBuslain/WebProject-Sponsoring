import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.css']
})
export class LinkAddComponent implements OnInit {

  link = { link_id: 0, accord_id:"", contrepartie_id:"",updatedAt: '', createdAt: ''}


  constructor(public rest:RestService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addLink() {
    this.rest.addLink(this.link).subscribe(
      (result) => {this.router.navigate(['/link']);}
    )
  }

}
