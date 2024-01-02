import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/projets`);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.baseUrl}/projets/${id}`);
    
  }

  findProjetsByCreateur(id: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/relatedprojets?createur=${id}`);
  }

  createProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.baseUrl}/projets`, projet);
  }

  updateProjet(id: number, projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.baseUrl}/projets/${id}`, projet);
  }

  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/projets/${id}`, { responseType: 'json' });
  }
}
