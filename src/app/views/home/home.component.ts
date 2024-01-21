// home.component.ts
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
  currentPage = 1;
  totalPages = 10; // Esto es solo un ejemplo, debes ajustarlo a tus necesidades

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
    const genreParam = this.selectedGenre ? `&with_genres=${this.selectedGenre}` : '';

    this.movieService.getMovies({ withGenres: this.selectedGenre, page: this.currentPage }).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  filterByGenre() {
    if (!this.selectedGenre) {
      return this.movies;
    }

    return this.movies.filter(movie => movie.genre_ids.includes(Number(this.selectedGenre)));
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }
}
