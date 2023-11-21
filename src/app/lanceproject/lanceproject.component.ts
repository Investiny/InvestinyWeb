import { Component } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lanceproject',
  templateUrl: './lanceproject.component.html',
  styleUrls: ['./lanceproject.component.css']
})
export class LanceprojectComponent {

  nouveauProjet: Projet = new Projet();
  projets: Projet[] = [];

  constructor(private projetService: ProjetService, private router: Router) { }

  // Function to retrieve all projects
  getProjets() {
    this.projetService.getProjets().subscribe(
      projects => {
        this.projets = projects;
        // Optionally, perform any additional operations with the retrieved projects
      },
      error => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  ajouterProjet() {
    this.projetService.createProjet(this.nouveauProjet).subscribe(
      response => {
        // Handle success response here
        console.log('Project added successfully!', response);
        // Optionally, reset the form after successful submission
        this.nouveauProjet = new Projet(); // Reset the form data or use form reset methods
        alert('Votre Projet a été Ajouter Avec Success ! Revenir a la page d`acceuil');
        // After adding a new project, refresh the list of projects
        this.getProjets();
        this.router.navigate(['/']);
      },
      error => {
        // Handle error response here
        console.error('Error adding project:', error);
      }
    );
  }

  ngOnInit() {
    this.getProjets();
  }

}
