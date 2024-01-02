import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { LanceprojectComponent } from './lanceproject/lanceproject.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { ViewprojetComponent } from './viewprojet/viewprojet.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
  {path: 'connect', component: ConnexionComponent},
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  {path: 'updateprofil', component: UpdateprofilComponent},
  {path: 'lanceprojet', component: LanceprojectComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'viewprojet', component: ViewprojetComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
