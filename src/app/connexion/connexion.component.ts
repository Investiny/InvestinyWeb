import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  adresseemail = '';
  motdepasse = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.adresseemail, this.motdepasse);
  }

}
