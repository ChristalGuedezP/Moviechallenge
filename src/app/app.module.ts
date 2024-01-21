// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { ComponentsModule } from './components/components.module'; // Importa tu módulo de componentes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
