import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement.model';
import { Projet } from '../models/projet.model';


@Injectable({
  providedIn: 'root'
})


export class PaiementServiceService {


  private baseUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  getAllPaiement(): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.baseUrl}/Paiements`);
  }

  getPaiementById(id: number): Observable<Paiement> {
    return this.http.get<Paiement>(`${this.baseUrl}/Paiements/${id}`);
  }

  findProjetsByPaiement(id: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/relatedPaiement?idutilisateur=${id}`);
  }

  createPaiement(Paiement: Paiement): Observable<Paiement> {
    return this.http.post<Paiement>(`${this.baseUrl}/Paiements`, Paiement);
  }

  updatePaiement(id: number, Paiement: Paiement): Observable<Paiement> {
    return this.http.put<Paiement>(`${this.baseUrl}/Paiements/${id}`, Paiement);
  }

  deletePaiement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Paiements/${id}`, { responseType: 'json' });
  }
  
}

