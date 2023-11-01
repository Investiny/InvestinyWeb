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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    ProfileComponent,
    CrudComponent,
    AcceuilComponent,
    LanceprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
