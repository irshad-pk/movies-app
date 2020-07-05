import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'edit-movie/:id', component: MovieDetailsComponent },
  { path: 'movies', component: MoviesListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
