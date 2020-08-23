import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloppeurComponent } from './developpeur/developpeur.component';
import { FormsModule } from '@angular/forms';
import { DeveloppeurService } from './services/developpeur.service';

@NgModule({
  declarations: [
    AppComponent,
    DeveloppeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DeveloppeurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
