import { Component, Input, OnInit } from '@angular/core';
import { RestService, Accord } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accord-view',
  templateUrl: './accord-view.component.html',
  styleUrls: ['./accord-view.component.css']
})
export class AccordViewComponent implements OnInit {

  @Input() accord!: Accord; // On récupère avec le @Input l'objet qui vient de la liste.
  showInfo = false;

  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewAccord() {
    this.rest.viewAccord(this.accord).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

}
