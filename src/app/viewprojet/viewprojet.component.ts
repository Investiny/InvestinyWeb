import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { DataSharingService } from '../services/data-sharing-service.service';
import { ProjetService } from '../services/projet.service';
declare var $: any;
import { HttpClient } from '@angular/common/http';
import { PaiementServiceService } from '../services/paiement-service.service';
import { ContributionServiceService } from '../services/contribution-service.service';
import { Paiement } from '../models/paiement.model';
import { Contributeur } from '../models/contributeur.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewprojet',
  templateUrl: './viewprojet.component.html',
  styleUrls: ['./viewprojet.component.css']
})
export class ViewprojetComponent implements OnInit {
  newPaiement: Paiement = new Paiement();
  newContributeur: Contributeur = new Contributeur();
  modifiedProjet: Projet = new Projet();

  localProductId: number = 0;
  localUserId: number = 0;
  storedUserId: string ='';
  localStatut: string = '';
  localPrix: number = 0;


  localTitre: string = '';
  localDesc: string = '';
  localCategorie: string = '';
  localMontC: number = 0;
  localMontA: number = 0;
  localDateD: Date = new Date();
  localDateF: Date = new Date();
  localImage: string = '';
  ProductIdAsNumber! :number;

  constructor(private ContributionServiceService:ContributionServiceService, private router: Router, private PaiementServiceService:PaiementServiceService, private http: HttpClient, private renderer: Renderer2, private el: ElementRef, private dataSharingService: DataSharingService, private projetService:ProjetService) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.storedUserId = userId ?? 'DefaultUserID';
    this.localUserId = parseInt(this.storedUserId);
    
    this.localProductId = this.dataSharingService.getProductId();
    console.log('Local Product ID:', this.localProductId);

    this.localTitre = this.dataSharingService.getTitre();
    console.log('Local Titre:', this.localTitre);

    this.localDesc = this.dataSharingService.getDesc();
    console.log('Local Desc:', this.localDesc);

    this.localCategorie = this.dataSharingService.getCategorie();
    console.log('Local Categorie:', this.localCategorie);

    this.localStatut = this.dataSharingService.getStatut();
    console.log('Local Statut:', this.localStatut);

    this.localMontC = this.dataSharingService.getMontC();
    console.log('Local MontC:', this.localMontC);

    this.localMontA = this.dataSharingService.getMontA();
    console.log('Local MontA:', this.localMontA);

    this.localDateD = this.dataSharingService.getDateD();
    console.log('Local DateD:', this.localDateD);

    this.localDateF = this.dataSharingService.getDateF();
    console.log('Local DateF:', this.localDateF);

    this.localPrix = this.dataSharingService.getPrix();
    console.log('Local Prix:', this.localPrix);
    this.initCarousel();
    this.initQuantityButtons();

    
  }
  onInputValue1Change() {
    this.newPaiement.num_carte = this.newContributeur.num_carte;
    
  }

  // Whenever the value in input field 2 changes, update the value of input field 1
  onInputValue2Change() {
    this.newContributeur.num_carte = this.newPaiement.num_carte;
  }


  Acheter(){

    // Assign values to the properties of the newPaiement instance
    this.newPaiement.montantpaiement = this.localPrix;
    this.newPaiement.datepaiement = new Date();
    this.newPaiement.idutilisateur = this.localUserId;
    this.newPaiement.idprojet = this.localProductId;
    this.newPaiement.num_carte = this.newPaiement.num_carte;
    console.log(this.newPaiement.num_carte);
    this.PaiementServiceService.createPaiement(this.newPaiement).subscribe(
      response => {
        // Handle success response here
        console.log('paiement made successfully!', response);
        // Optionally, reset the form after successful submission
        this.newPaiement = new Paiement(); // Reset the form data or use form reset methods
        alert('Votre paiement a été Effectuée Avec Success !');
        // After adding a new project, refresh the list of projects
        this.router.navigate(['/profile']);
      },
      error => {
        // Handle error response here
        console.error('Error making paiement:', error);
      }
    );

  }

  Contribuer(){

    this.newContributeur.datecontribution = new Date();
    this.newContributeur.idutilisateur = this.localUserId;
    this.newContributeur.idprojet = this.localProductId;
    this.modifiedProjet.prix = this.localPrix;
    this.modifiedProjet.titreduprojet= this.localTitre;
    this.modifiedProjet.description= this.localDesc;
    this.modifiedProjet.categorie= this.localCategorie;
    this.modifiedProjet.montantcible= this.localMontC;
    
    const montantA = Number(this.localMontA);
    const montantContribution = Number(this.newContributeur.montantcontribution);

    this.modifiedProjet.montantactuel = montantA + montantContribution;
    console.log(this.localMontA + this.newContributeur.montantcontribution);

    this.modifiedProjet.datededebut= this.localDateD;
    this.modifiedProjet.datedefin= this.localDateF;
    this.modifiedProjet.imageduprojet= this.localImage;

    console.log(this.newContributeur.montantcontribution);
    console.log(this.newContributeur.num_carte);

    console.log(this.modifiedProjet.montantactuel);
    
    
    if(this.modifiedProjet.montantactuel >=  this.modifiedProjet.montantcible){
      this.modifiedProjet.statut = "Funded";
    }
    else{
      this.modifiedProjet.statut = "Funding";
    }

    this.ContributionServiceService.createContributeur(this.newContributeur).subscribe(
      response => {
        // Handle success response here
        console.log('Contribution made successfully!', response);
        // Optionally, reset the form after successful submission
        this.newPaiement = new Paiement(); // Reset the form data or use form reset methods
        alert('Votre Contribution a été Effectuée Avec Success !');
        // After adding a new project, refresh the list of projects
        this.router.navigate(['/profile']);
      },
      error => {
        // Handle error response here
        console.error('Error making Contribution:', error);
      }
    );

    this.projetService.updateProjet(this.localProductId, this.modifiedProjet).subscribe(
      response => {
        // Handle success response here
        console.log('Projet modified successfully!', response);
      },
      error => {
        // Handle error response here
        console.error('Error modifying Projet:', error);
      }
    );
  }



  
  private initCarousel(): void {
    const slider = $(this.el.nativeElement).find('#slider');
    const thumb = $(this.el.nativeElement).find('#thumb');
    
    // Initialize the owl carousel
    slider.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200
    }).on('changed.owl.carousel', this.syncPosition);
    
    thumb.on('initialized.owl.carousel', () => {
      thumb.find('.owl-item').eq(0).addClass('current');
    }).owlCarousel({
      // ... (configuration for the thumbnail carousel)
    }).on('changed.owl.carousel', this.syncPosition2);
    
    // Other carousel related functions
    // ...

  }

  private syncPosition(event: any): void {
    // Synchronize the main and thumbnail carousels
    // ...
  }

  private syncPosition2(event: any): void {
    // Additional synchronization logic
    // ...
  }

  private initQuantityButtons(): void {
    // Initialize quantity buttons
    const qtyminus = $(this.el.nativeElement).find('.qtyminus');
    const qtyplus = $(this.el.nativeElement).find('.qtyplus');

    qtyminus.on('click', () => {
      const now = $('.qty').val();
      if ($.isNumeric(now)) {
        if (parseInt(now) - 1 > 0) {
          $('.qty').val(now - 1);
        }
      }
    });

    qtyplus.on('click', () => {
      const now = $('.qty').val();
      if ($.isNumeric(now)) {
        $('.qty').val(parseInt(now) + 1);
      }
    });
  }
}
