import { Component, Input, OnInit } from '@angular/core';
import { RestService, Contrepartie } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contrepartie-view',
  templateUrl: './contrepartie-view.component.html',
  styleUrls: ['./contrepartie-view.component.css']
})
export class ContrepartieViewComponent implements OnInit {

  @Input() contrepartie!: Contrepartie; // On récupère avec le @Input l'objet qui vient de la liste.
  showInfo = false;

  constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewContrepartie() {
    this.rest.viewContrepartie(this.contrepartie).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

}
