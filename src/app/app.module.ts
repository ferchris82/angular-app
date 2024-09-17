import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Importar el componente standalone

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent // Importar el componente standalone aquí
  ],
  providers: [
    provideClientHydration()
  ]
})
export class AppModule { }
