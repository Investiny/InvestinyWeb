import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur.model';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';
import { ContributionServiceService } from '../services/contribution-service.service';
import { PaiementServiceService } from '../services/paiement-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  relatedproducts! : Projet[];
  contributedproducts! : Projet[];
  Boughtproducts! : Projet[];
  storedUserId!: string;
  userIdAsNumber!: number;
  user!: Utilisateur;

  constructor(private ContributionServiceService: ContributionServiceService, private PaiementServiceService: PaiementServiceService, private router: Router, private UtilisateurService: UtilisateurService, private projetService: ProjetService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.storedUserId = userId ?? 'DefaultUserID';
    console.log('Stored User ID:', this.storedUserId);
    this.userIdAsNumber = parseInt(this.storedUserId);
    this.loadData();
    this.loadUserRelatedProjets()
  }
  
    loadData(){
    this.UtilisateurService.getUtilisateurById(this.userIdAsNumber).subscribe(data => {
      this.user = data;
    });
    }

  loadUserRelatedProjets(){
    this.projetService.findProjetsByCreateur(this.userIdAsNumber).subscribe(data => {
      this.relatedproducts = data;
    });

    /*this.ContributionServiceService.findProjetsByContributeur(this.userIdAsNumber).subscribe(data => {
      this.contributedproducts = data;
    });

    this.PaiementServiceService.findProjetsByPaiement(this.userIdAsNumber).subscribe(data => {
      this.Boughtproducts = data;
    });
    */
    }


  
  
  
}
