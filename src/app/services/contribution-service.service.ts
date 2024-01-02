
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contributeur } from '../models/contributeur.model';
import { Projet } from '../models/projet.model';
@Injectable({
  providedIn: 'root'
})
export class ContributionServiceService {

  private baseUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  getAllContributeur(): Observable<Contributeur[]> {
    return this.http.get<Contributeur[]>(`${this.baseUrl}/Contributeurs`);
  }

  findProjetsByContributeur(id: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/relatedContribiteur?idutilisateur=${id}`);
  }

  getContributeurById(id: number): Observable<Contributeur> {
    return this.http.get<Contributeur>(`${this.baseUrl}/Contributeurs/${id}`);
  }

  createContributeur(Contributeur: Contributeur): Observable<Contributeur> {
    return this.http.post<Contributeur>(`${this.baseUrl}/Contributeurs`, Contributeur);
  }

  updateContributeur(id: number, Contributeur: Contributeur): Observable<Contributeur> {
    return this.http.put<Contributeur>(`${this.baseUrl}/Contributeurs/${id}`, Contributeur);
  }

  deleteContributeur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Contributeurs/${id}`, { responseType: 'json' });
  }
}
