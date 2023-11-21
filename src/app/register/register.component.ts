import { Component } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nouveauUtilisateur: Utilisateur = new Utilisateur();
  utilisateurs: Utilisateur[] = [];
  constructor(private UtilisateurService: UtilisateurService, private router: Router) { }


  getUtilisateurs() {
    this.UtilisateurService.getAllUtilisateurs().subscribe(
      utilisateurs => {
        this.utilisateurs =utilisateurs;
      },
      error => {
        console.error('Error fetching projects:', error);
      }
    );
  }


  ajouterUtilisateur() {
    this.UtilisateurService.createUtilisateur(this.nouveauUtilisateur).subscribe(
      response => {
        // Handle success response here
        console.log('User added successfully!', response);
        // Optionally, reset the form after successful submission
        this.nouveauUtilisateur = new Utilisateur(); // Reset the form data or use form reset methods
        alert('Votre Compte a été Ajouter Avec Success ! Tu peut maintenant se connecter');
        // After adding a new project, refresh the list of projects
        this.getUtilisateurs();
        this.router.navigate(['/connect']);
      },
      error => {
        // Handle error response here
        console.error('Error adding user:', error);
      }
    );
  }


  ngOnInit() {
    this.getUtilisateurs();
  }
}
