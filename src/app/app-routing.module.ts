import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { LanceprojectComponent } from './lanceproject/lanceproject.component';
import { ProjetComponent } from './projet/projet.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
  {path: 'connect', component: ConnexionComponent},
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  {path: 'updateprofil', component: UpdateprofilComponent},
  {path: 'lanceprojet', component: LanceprojectComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
