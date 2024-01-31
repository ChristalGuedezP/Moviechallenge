import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '35e0859a52aa8405ed108af855764b5e';

  constructor(private http: HttpClient) {}

  getMovies(params: { withGenres?: string | null, page?: number, sortOrder?: string } = {}): Observable<any> {
    const discoverEndpoint = 'discover/movie';
    const url = `${this.apiUrl}/${discoverEndpoint}?api_key=${this.apiKey}&language=en-US&page=${params.page || 1}&sort_by=${params.sortOrder || 'popularity.desc'}&include_adult=false&include_video=false&with_release_type=2|3${params.withGenres ? `&with_genres=${params.withGenres}` : ''}`;
  
    console.log('URL de la solicitud:', url);
  
    return this.http.get(url);
  }
  
  getGenres(): Observable<any> {
    const genresEndpoint = 'genre/movie/list';
    const url = `${this.apiUrl}/${genresEndpoint}?api_key=${this.apiKey}&language=en-US`;

    return this.http.get(url);
  }
}