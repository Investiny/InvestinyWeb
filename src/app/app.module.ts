import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { CrudComponent } from './crud/crud.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LanceprojectComponent } from './lanceproject/lanceproject.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetService } from './services/projet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    ProfileComponent,
    CrudComponent,
    AcceuilComponent,
    LanceprojectComponent,
    UpdateprofilComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
