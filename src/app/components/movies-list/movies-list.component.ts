import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";

import { from } from 'rxjs';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  Movies:any = [];

  constructor(private movieService: MovieService) { 
    this.getAllMovies();
  }

  ngOnInit(): void {
  }

  getAllMovies(){
    this.movieService.getMovies().subscribe((data) => {
      this.Movies = data;
    })
  }
}
