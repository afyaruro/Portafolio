import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { InicioPerfilComponent } from './inicio-perfil/inicio-perfil.component';
import { ProyectosPortafolioComponent } from './proyectos-portafolio/proyectos-portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioPerfilComponent,
    ProyectosPortafolioComponent,
    ListaProyectosComponent
  ],
  imports: [FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
