import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contrepartie-add',
  templateUrl: './contrepartie-add.component.html',
  styleUrls: ['./contrepartie-add.component.css']
})
export class ContrepartieAddComponent implements OnInit {

  contrepartie = { contrepartie_id: 0, description:"", etat_avancement:"",statut:true, updatedAt: '', createdAt: ''}

 // On instancie les différentes routes dans le constructeur. 
 constructor(public rest:RestService, private router: Router, private activatedRoute: ActivatedRoute) { }

 ngOnInit(): void {
 } 

 addContrepartie() {
   this.rest.addContrepartie(this.contrepartie).subscribe(
     (result) => {this.router.navigate(['/contrepartie']);}
   )
 }
}
