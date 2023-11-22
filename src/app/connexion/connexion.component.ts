import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  adresseemail: string = '';
  motdepasse: string = '';

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  login(): void {
    this.authService.login(this.adresseemail, this.motdepasse).subscribe(
      response => {
        // Handle successful login
        console.log('Login successful', response);
        this.snackBar.open('La connexion a réussi. bienvenue !', 'Close', {
          duration: 3000,
          panelClass: ['green-snackbar'], 
        });
        this.router.navigate(['/profile']);
      },
      error => {
        // Handle login error
        console.error('Login Failed', error);
        this.snackBar.open('La connexion a échoué. Veuillez vérifier votre adresse e-mail et votre mot de passe.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
