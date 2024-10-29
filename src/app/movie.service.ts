import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http:HttpClient) { }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies.json')
  }
  getMovieById(id: number): Observable<Movie | undefined> {
    return this.getMovies().pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }
}
