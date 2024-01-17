import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
    },
  {
    path:"movies/:id",
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
