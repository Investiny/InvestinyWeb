import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
  {path: 'connect', component: ConnexionComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
