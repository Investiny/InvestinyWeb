import { Component } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';
import { CrudComponent } from '../crud/crud.component';

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

}
