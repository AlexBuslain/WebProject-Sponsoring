import { Component, OnInit } from '@angular/core';
import { RestService, Accord } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {

  accords: Accord[] = [];
  accord!: Accord;
  showInfo = false;

  constructor( public rest:RestService, private router: Router) { }

  // On utilise à partir du moment où on démarre avec la méthode ngOnInit
  ngOnInit(): void {
    this.getAccords(); // On va utiliser ce getAccords pour remplir la liste d'accords.
  }

  getAccords() {
    // On va chercher les accords dans le service. On "subscribe" car on a créé un Observable dans le service et donc on vient s'abonner. 
    this.rest.getAccords().subscribe(
      (resp) => { 
        console.log(resp)
        this.accords = resp;
      }
    )
  }

  addAccord() {
    this.router.navigate(['/accord-add']);
  }

  deleteAccord(id:number){
    this.rest.deleteAccord(id).subscribe(res => {
         this.accords = this.accords.filter(item => item.accord_id !== id);
         console.log('Post deleted successfully!');
    })
  }

  viewAccord() {
    this.rest.viewAccord(this.accord).subscribe(
      (result) => {this.router.navigate(['/home']);}
    )
  }

  showInfoForm(accord: Accord) {
    this.showInfo = !this.showInfo;
    this.accord = accord;
    this.router.navigate(['/accord'])
  } 

  goToContrepartie(accord: Accord) {
    this.router.navigate(['/contrepartie'])
  }

  goToLink(accord: Accord) {
    this.router.navigate(['/link'])
  }

}
