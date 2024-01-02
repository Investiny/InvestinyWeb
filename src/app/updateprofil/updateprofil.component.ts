import { Component } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent {

  constructor(private UtilisateurService: UtilisateurService, private router: Router, private snackBar: MatSnackBar) { }
  storedUserId!: string;
  userIdAsNumber!: number;
  user!: Utilisateur;

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.storedUserId = userId ?? 'DefaultUserID';
    console.log('Stored User ID:', this.storedUserId);
    this.userIdAsNumber = parseInt(this.storedUserId);
  }
  modifiedUtilisateur: Utilisateur = new Utilisateur();

  modifierUtilisateur() {
    this.UtilisateurService.updateUtilisateur(this.userIdAsNumber, this.modifiedUtilisateur).subscribe(
      response => {
        // Handle success response here
        console.log('User modified successfully!', response);
        this.snackBar.open('La modification a réussi.', 'Close', {
          duration: 3000,
          panelClass: ['green-snackbar'], 
        });
      },
      error => {
        // Handle error response here
        console.error('Error modifying user:', error);
      }
    );
  }

}
