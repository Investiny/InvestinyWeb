import { Component } from '@angular/core';
import { ProjetComponent } from '../projet/projet.component';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  projets!: Projet[];
  selectedProjet!: Projet;
  editing: boolean = false;

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.loadProjets();
  }

  loadProjets() {
    this.projetService.getProjets().subscribe(data => {
      this.projets = data;
    });
  }

  onSelect(projet: Projet) {
    this.selectedProjet = projet;
  }

  onEdit() {
    this.editing = true;
  }

  onSave(projet: Projet) {
    this.projetService.updateProjet(projet.id, projet).subscribe(() => {
      this.loadProjets();
      this.editing = false;
    });
  }

  /*onAdd() {
    const newProjet = new Projet(); // Vous pouvez initialiser les propriétés ici si nécessaire.
    this.selectedProjet = newProjet;
    this.editing = true;
  }*/
   /*products = [
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/pc.PNG', 'productName': 'pc', 'productDesc': 'kehrfbernsbkgehred', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
   ];*/

}
