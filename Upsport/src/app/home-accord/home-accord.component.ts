import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-accord',
  templateUrl: './home-accord.component.html',
  styleUrls: ['./home-accord.component.scss']
})
export class HomeAccordComponent implements OnInit {
  sponsor!: string;
  athlete!: string;
  date_signature!: string;
  date_fin!: string;
  
  ngOnInit(): void {
    this.sponsor = "Red Bull";
    this.athlete = "Tom de Dorlodot";
    this.date_signature = "2015";
    this.date_fin = "2025";
  }

}
