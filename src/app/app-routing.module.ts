import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { LanceprojectComponent } from './lanceproject/lanceproject.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
  {path: 'connect', component: ConnexionComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'updateprofil', component: UpdateprofilComponent},
  {path: 'lanceprojet', component: LanceprojectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
