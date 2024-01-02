import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Maintain authentication state

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:8081/api/v1';

  login(adresseemail: string, motdepasse: string): Observable<any> {
    const loginData = { adresseemail, motdepasse };

    return this.http.post<any>(`${this.baseUrl}/login`, loginData, { responseType: 'text' as 'json' })
      .pipe(
        map(response => {
          try {
            // Assuming your login response sets some token or flag upon successful login
            this.loggedIn = true; // Set loggedIn to true upon successful login
            return JSON.parse(response);
          } catch (error) {
            return response;
          }
        }),
        catchError(error => {
          // Handle error appropriately
          return throwError(error);
        })
      );
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Return the authentication state
  }
}