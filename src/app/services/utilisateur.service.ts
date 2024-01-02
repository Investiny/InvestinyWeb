import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}/utilisateurs`);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/utilisateurs/${id}`);
  }

  createUtilisateur(Utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}/utilisateurs`, Utilisateur);
  }

  updateUtilisateur(id: number, Utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.baseUrl}/utilisateurs/${id}`, Utilisateur);
  }

  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/utilisateurs/${id}`, { responseType: 'json' });
  }
}
