export class Projet {
  id: number;
  titreDuProjet: string;
  description: string;
  categorie: string;
  statut: string;
  montantCible: number;
  montantActuel: number;
  dateDeDebut: Date;
  dateDeFin: Date;
  imageDuProjet: string;
  createur: string;
  

  constructor(
    id: number,
    titreDuProjet: string,
    description: string,
    categorie: string,
    statut: string,
    montantCible: number,
    montantActuel: number,
    dateDeDebut: Date,
    dateDeFin: Date,
    imageDuProjet: string,
    createur: string
  ) {
    this.id = id;
    this.titreDuProjet = titreDuProjet;
    this.description = description;
    this.categorie = categorie;
    this.statut = statut;
    this.montantCible = montantCible;
    this.montantActuel = montantActuel;
    this.dateDeDebut = dateDeDebut;
    this.dateDeFin = dateDeFin;
    this.imageDuProjet = imageDuProjet;
    this.createur = createur;
  };
}
