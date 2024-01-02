import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing-service.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  @Input()
  productId! : number;
  @Input()
  productPhoto! : string;
  @Input()
  productName! : string;
  @Input()
  productDesc! : string;
  @Input()
  productPrix! : number;
  @Input()
  productDateD! : Date;
  @Input()
  productDateF! : Date;
  @Input()
  productMontA! : number;
  @Input()
  productMontC! : number;
  @Input()
  productStatut! : string;
  @Input()
  productCategorie! : string;
//////////////////////////////////////////
  MyproductId! : number;
  MyTitre! : string;
  MyDesc! : string;
  Mycategorie! : string;
  Mystatut! : string;
  MymontC! : number;
  MymontA! : number;
  MyDateD! : Date;
  MyDateF! : Date;
  MyPrix! : number;

  shouldHideInput: boolean = true; // or false based on your condition

  constructor(private router : Router, private dataSharingService: DataSharingService){}

  ngOnInit() {
    
    // Set MyproductId in the service
  }

  saveInput() {
    this.MyproductId = this.productId;
    this.MyTitre = this.productName;
    this.MyDesc = this.productDesc;
    this.Mycategorie = this.productCategorie;
    this.Mystatut = this.productStatut;
    this.MymontC = this.productMontC;
    this.MymontA = this.productMontA;
    this.MyDateD = this.productDateD;
    this.MyDateF = this.productDateF;
    this.MyPrix = this.productPrix;

    this.dataSharingService.setProductId(this.MyproductId);
    console.log('Input value:', this.MyproductId);

    this.dataSharingService.setTitre(this.MyTitre);
    console.log('Input value:', this.MyTitre);

    this.dataSharingService.setDesc(this.MyDesc);
    console.log('Input value:', this.MyDesc);

    this.dataSharingService.setCategorie(this.Mycategorie);
    console.log('Input value:', this.Mycategorie);

    this.dataSharingService.setStatut(this.Mystatut);
    console.log('Input value:', this.Mystatut);

    this.dataSharingService.setMontC(this.MymontC);
    console.log('Input value:', this.MymontC);

    this.dataSharingService.setMontA(this.MymontA);
    console.log('Input value:', this.MymontA);

    this.dataSharingService.setDateD(this.MyDateD);
    console.log('Input value:', this.MyDateD);

    this.dataSharingService.setDateF(this.MyDateF);
    console.log('Input value:', this.MyDateF);

    this.dataSharingService.setPrix(this.MyPrix);
    console.log('Input value:', this.MyPrix);
    
    this.router.navigate(['/viewprojet']);
  }

  Index! : number;

}
