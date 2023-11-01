import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  @Input()
  productPhoto! : string;
  @Input()
  productName! : string;
  @Input()
  productDesc! : string;
  @Input()
  productPrix! : string;
  Index! : number;
  constructor(){}
}
