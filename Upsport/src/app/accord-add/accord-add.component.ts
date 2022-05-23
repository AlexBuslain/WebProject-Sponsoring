import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accord-add',
  templateUrl: './accord-add.component.html',
  styleUrls: ['./accord-add.component.css']
})
export class AccordAddComponent implements OnInit {

  accord = { accord_id: 0, sponsor: '', athlete: '', date_signature: '', date_fin: '', updatedAt: ''}

  // On instancie les différentes routes dans le constructeur. 
  constructor(public rest:RestService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  } 

  addAccord() {
    this.rest.addAccord(this.accord).subscribe(
      (result) => {this.router.navigate(['/accord']);}
    )
  }

}
