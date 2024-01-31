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
  selectedGenre: string | undefined;
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
        console.log('Genres:', this.genres);
      },
      (error) => {
        console.error('Error fetching genres:', error);
      }
    );
  }

  loadMovies(params: { withGenres?: string | null, page?: number, sortOrder?: string } = {}) {
    this.movieService.getMovies({
      withGenres: params.withGenres || this.selectedGenre,
      page: params.page || this.currentPage,
      sortOrder: params.sortOrder,
    }).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
        console.log('Movies:', this.movies);
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

  onSortChanged(order: string) {
    this.loadMovies({ sortOrder: order });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadMovies();
  }
}
