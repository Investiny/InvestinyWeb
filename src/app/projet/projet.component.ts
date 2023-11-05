import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
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
}
