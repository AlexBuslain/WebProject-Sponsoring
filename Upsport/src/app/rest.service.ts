import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//--------------------------------------ACCORDS--------------------------------------//
// Constante avec accès LocalHost (server) dans le cas des accords.
const baseURL = 'http://localhost:3000/'

// Définition d'une interface/classe Accord
export interface Accord {
  accord_id: number;
  sponsor: string;
  athlete: string;
  date_signature: Date;
  date_fin: Date;
  updatedAt: Date;
}



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getAccords(): Observable<any> { 
    return this.http.get<Accord>(baseURL + "accords")}
}
