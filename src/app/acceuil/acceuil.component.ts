import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
   products = [
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/pc.PNG', 'productName': 'pc', 'productDesc': 'kehrfbernsbkgehred', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
     {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
   ];

}
