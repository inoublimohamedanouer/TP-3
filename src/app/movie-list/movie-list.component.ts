import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];
  filteredMovies : Movie[] = [];
  constructor(private http:HttpClient) {}
  ngOnInit(){
    this.getMovies();
  }
  getMovies(){
    this.http.get<Movie[]>('/movies.json').subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.log('Error loading movies:',error);
      }
    )
    this.filteredMovies = this.movies;
  }
  getMovieTitle(movieTitle:String){
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(movieTitle.toLowerCase())
    )
  }
}
