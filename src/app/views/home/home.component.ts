//home.component.ts
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
  currentPage: number = 1;
  totalPages: number = 0;

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

  filterByGenre(): any[] {
    if (!this.selectedGenre) {
      return this.movies;
    }

    return this.movies.filter(movie => movie.genre_ids.includes(Number(this.selectedGenre)));
  }

  onPageChange(page: number): void {
  this.currentPage = page;
  this.loadMovies();
}
}