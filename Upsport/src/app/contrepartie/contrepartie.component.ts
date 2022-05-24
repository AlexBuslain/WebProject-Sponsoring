import { Component, OnInit } from '@angular/core';
import { RestService, Contrepartie } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrepartie',
  templateUrl: './contrepartie.component.html',
  styleUrls: ['./contrepartie.component.css']
})
export class ContrepartieComponent implements OnInit {

  contreparties: Contrepartie[] = [];
  contrepartie!: Contrepartie;
  show = false;
  showInfo = false;

  constructor( public rest:RestService, private router: Router) { }

  // On utilise à partir du moment où on démarre avec la méthode ngOnInit
  ngOnInit(): void {
    this.getContreparties(); // On va utiliser ce getAthletes pour remplir la liste de contreparties.
  }

  getContreparties() {
    // On va chercher les contreparties dans le service. On "subscribe" car on a créé un Observable dans le service et donc on vient s'abonner. 
    this.rest.getContreparties().subscribe(
      (resp) => { 
        console.log(resp)
        this.contreparties = resp;
      }
    )
  }

  addContrepartie() {
    this.router.navigate(['/contrepartie-add']);
  }


  deleteContrepartie(id:number){
    this.rest.deleteContrepartie(id).subscribe(res => {
         this.contreparties = this.contreparties.filter(item => item.contrepartie_id !== id);
         console.log('Post deleted successfully!');
    })
  }

  viewContrepartie() {
    this.rest.viewContrepartie(this.contrepartie).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

  showEditForm(contrepartie: Contrepartie) {
    this.show = !this.show;
    this.contrepartie = contrepartie;
    this.router.navigate(['/contrepartie'])
  } 

  showInfoForm(contrepartie: Contrepartie) {
    this.showInfo = !this.showInfo;
    this.contrepartie = contrepartie;
    this.router.navigate(['/contrepartie'])
  } 

}

