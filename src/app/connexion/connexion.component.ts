import { Component ,ChangeDetectorRef} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  isLoggedIn: boolean = false;
  adresseemail: string = '';
  motdepasse: string = '';

  constructor(private location: Location, private authService: AuthService, private router: Router, private snackBar: MatSnackBar,private cdRef: ChangeDetectorRef) {}
 

refreshComponent() {
    this.cdRef.detectChanges(); // Trigger change detection
  }
checkAuthentication(): void {
    const userId = localStorage.getItem('userId');
    this.isLoggedIn = !!userId; // Set isLoggedIn to true if userId exists
  }
  
  login(): void {
    this.authService.login(this.adresseemail,this.motdepasse).subscribe(
      (userId: string) => {
        // Store the user ID in localStorage upon successful login
        localStorage.setItem('userId', userId);
        console.log('Login successful. User ID stored:', userId);
        this.refreshComponent();
        this.checkAuthentication();
        this.snackBar.open('La connexion a réussi. bienvenue !', 'Close', {
          duration: 3000,
          panelClass: ['green-snackbar'], 
        });
        this.location.go('/profile');
        window.location.reload();
      },
      error => {
        console.error('Login Failed', error);
        this.snackBar.open('La connexion a échoué. Veuillez vérifier votre adresse e-mail et votre mot de passe.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
