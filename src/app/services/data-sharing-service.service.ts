import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private sharedProductId: number = 0;
  private sharedTitre: string = '';
  private sharedDesc: string = '';
  private sharedCategorie: string = '';
  private sharedStatut: string = '';
  private sharedMontC: number = 0;
  private sharedMontA: number = 0;
  private sharedDateD: Date = new Date();
  private sharedDateF: Date = new Date();
  private sharedImage: string = './assets/images/product/bag.PNG';
  private sharedPrix: number = 0;

  setProductId(productId: number): void {
    this.sharedProductId = productId;
  }

  getProductId(): number {
    return this.sharedProductId;
  }

  setTitre(titre: string): void {
    this.sharedTitre = titre;
  }

  getTitre(): string {
    return this.sharedTitre;
  }

  setDesc(desc: string): void {
    this.sharedDesc = desc;
  }

  getDesc(): string {
    return this.sharedDesc;
  }

  setCategorie(categorie: string): void {
    this.sharedCategorie = categorie;
  }

  getCategorie(): string {
    return this.sharedCategorie;
  }

  setStatut(statut: string): void {
    this.sharedStatut = statut;
  }

  getStatut(): string {
    return this.sharedStatut;
  }

  setMontC(montC: number): void {
    this.sharedMontC = montC;
  }

  getMontC(): number {
    return this.sharedMontC;
  }

  setMontA(montA: number): void {
    this.sharedMontA = montA;
  }

  getMontA(): number {
    return this.sharedMontA;
  }

  setDateD(dateD: Date): void {
    this.sharedDateD = dateD;
  }

  getDateD(): Date {
    return this.sharedDateD;
  }

  setDateF(dateF: Date): void {
    this.sharedDateF = dateF;
  }

  getDateF(): Date {
    return this.sharedDateF;
  }

  setImage(): void {
    this.sharedImage = './assets/images/product/bag.PNG';
  }

  getImage(): string {
    return this.sharedImage;
  }

  setPrix(prix: number): void {
    this.sharedPrix = prix;
  }

  getPrix(): number {
    return this.sharedPrix;
  }
}

