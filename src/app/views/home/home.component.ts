import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];
  selectedGenre: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadMovies();
  }

  loadGenres() {
    this.movieService.getGenres().subscribe(
      (data) => {
        this.genres = data.genres;
      },
      (error) => {
        console.error('Error fetching genres:', error);
      }
    );
  }

  loadMovies() {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data.results;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  // Filtrar películas por género
  filterByGenre() {
    if (!this.selectedGenre) {
      return this.movies; // No hay género seleccionado, retorna todas las películas.
    }

    // Filtra las películas por el género seleccionado.
    return this.movies.filter(movie => movie.genre_ids.includes(Number(this.selectedGenre)));
  }
}