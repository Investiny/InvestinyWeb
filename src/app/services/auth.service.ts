import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(adresseemail: string, motdepasse: string) {
    this.http.post<any>('http://localhost:3002/api/v1/login', { adresseemail, motdepasse }, { observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          // Handle authentication failure (e.g., display error message)
          this.router.navigate(['/']);
          return throwError('Authentication failed');
        })
      )
      .subscribe((response: HttpResponse<any>) => {
        // Check the HTTP response status code
        if (response.status === 200) {
          // Assuming backend returns a token or success response upon successful login
            // Authentication successful, navigate to profile page
            this.router.navigate(['/profile']);
        }
      });
  }
}

