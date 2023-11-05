import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  products = [
    {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
    {'productPhoto': './assets/images/product/pc.PNG', 'productName': 'pc', 'productDesc': 'kehrfbernsbkgehred', 'productPrix': 200},
    {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10 },
    {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
    {'productPhoto': './assets/images/product/bag.PNG', 'productName': 'bag', 'productDesc': 'bag du site investiny cadeau pour toi', 'productPrix': 10},
  ];


}
