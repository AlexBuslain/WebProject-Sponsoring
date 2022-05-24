import { Component, Input, OnInit } from '@angular/core';
import { RestService, Contrepartie } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contrepartie-edit',
  templateUrl: './contrepartie-edit.component.html',
  styleUrls: ['./contrepartie-edit.component.css']
})
export class ContrepartieEditComponent implements OnInit {

  @Input() contrepartie!: Contrepartie; // On récupère avec le @Input l'objet qui vient de la liste.

   // On instancie les différentes routes dans le constructeur. 
   constructor(public rest:RestService, private router: Router, private route: ActivatedRoute) { }

   ngOnInit(): void { // Autre possibilité si on veut edit.
     // this.rest.getAthlete(this.route.snapshot.params.athlete_id).subscribe(
      // (data) => { 
      //   console.log(data[0]);
      //   this.athlete = data[0];
      // }
     //)
   }
 
   updateContrepartie() {
     this.rest.updateContrepartie(this.contrepartie).subscribe(
       (result) => {this.router.navigate(['/accord']);}
     )
   }
 
 }
 