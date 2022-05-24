import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Constante avec accès LocalHost (server) dans le cas des accords.
const baseURL = 'http://localhost:3000/'

//--------------------------------------ACCORDS--------------------------------------//
// Définition d'une interface/classe Accord
export interface Accord {
  [x: string]: any;
  accord_id: number;
  sponsor: string;
  athlete: string;
  date_signature: string;
  date_fin: string;
  updatedAt: string;
  createdAt: string;
}

//--------------------------------------ATHLETES--------------------------------------//
export interface Athlete {
  [x: string]: any;
  athlete_id: number;
  nom: string;
  prenom: string;
  discipline: string;
  adresse: string;
  updatedAt: string;
  createdAt: string;
}

//--------------------------------------SPONSOR--------------------------------------//
export interface Sponsor {
  [x: string]: any;
  sponsor_id: number;
  nom: string;
  adresse: string;
  updatedAt: string;
  createdAt: string;
}




@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

    // ACCORDS //
  getAccords(): Observable<any> { 
    return this.http.get<Accord>(baseURL + "accords");
  }

  getAccord(accord_id: number): Observable<any> { 
    return this.http.get<Accord>(baseURL + "accords/" + accord_id);
  }

  addAccord(accord: Accord): Observable<any> { 
    return this.http.post(baseURL + "accords", accord);
  }

  deleteAccord(accord_id: number): Observable<any> { 
    return this.http.delete(baseURL + "accords/" + accord_id)
  }

  viewAccord(accord: Accord): Observable<any> { 
    return this.http.get<Athlete>(baseURL + "accords/" + accord.accord_id);
  }

    // ATHLETES //
  getAthletes(): Observable<any> { 
    return this.http.get<Athlete>(baseURL + "athletes");
  }

  addAthlete(athlete: Athlete): Observable<any> { 
    return this.http.post(baseURL + "athletes", athlete);
  }

  updateAthlete(athlete: Athlete): Observable<any> { 
    return this.http.put<Athlete>(baseURL + "athletes/" + athlete.athlete_id, athlete);
  }

  getAthlete(athlete_id: number): Observable<any> { 
    return this.http.get<Athlete>(baseURL + "athletes/" + athlete_id);
  }

  deleteAthlete(athlete_id: number): Observable<any> { 
    return this.http.delete(baseURL + "athletes/" + athlete_id)
  }

  viewAthlete(athlete: Athlete): Observable<any> { 
    return this.http.get<Athlete>(baseURL + "athletes/" + athlete.athlete_id);
  }


  // SPONSORS //
  getSponsors(): Observable<any> { 
    return this.http.get<Sponsor>(baseURL + "sponsors");
  }

  addSponsor(sponsor: Sponsor): Observable<any> { 
    return this.http.post(baseURL + "sponsors", sponsor);
  }

  updateSponsor(sponsor: Sponsor): Observable<any> { 
    return this.http.put<Sponsor>(baseURL + "sponsors/" + sponsor.sponsor_id,sponsor);
  }

  getSponsor(sponsor_id: number): Observable<any> { 
    return this.http.get<Sponsor>(baseURL + "sponsors/" + sponsor_id);
  }

  deleteSponsor(sponsor_id: number): Observable<any> { 
    return this.http.delete(baseURL + "sponsors/" + sponsor_id)
  }

  viewSponsor(sponsor: Sponsor): Observable<any> { 
    return this.http.get<Sponsor>(baseURL + "sponsors/" + sponsor.sponsor_id);
  }
  
  
} 

