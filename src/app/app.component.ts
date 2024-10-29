import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from "./head-bar/head-bar.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, SearchBarComponent, MovieListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';
}
