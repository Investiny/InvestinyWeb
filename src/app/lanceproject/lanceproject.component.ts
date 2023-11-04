import { Component } from '@angular/core';

@Component({
  selector: 'app-lanceproject',
  templateUrl: './lanceproject.component.html',
  styleUrls: ['./lanceproject.component.css']
})
export class LanceprojectComponent {
  nouveauProjet = {
    titre: '',
    description: '',
    categorie: '',
    montantCible: null,
    dateDebut: '',
    dateFin: '',
    image: null
  };

  ajouterProjet() {
    // Ici, vous pouvez ajouter la logique pour enregistrer le projet dans votre base de données ou effectuer d'autres actions nécessaires.
    // Vous pouvez également afficher une alerte de confirmation.
    const confirmation = window.confirm('Êtes-vous sûr de vouloir partager ce projet ?');
    if (confirmation) {
      // Logique pour ajouter le projet
    }
  }

}
