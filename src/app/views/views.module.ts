//views.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    MoviesComponent
  ]
})
export class ViewsModule { }