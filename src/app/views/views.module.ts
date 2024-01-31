import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    MoviesComponent
  ]
})
export class ViewsModule { }