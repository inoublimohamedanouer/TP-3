import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() movieTitle = new EventEmitter<String>();
  searchMovieByTitle(movieTitle : string){
    this.movieTitle.emit(movieTitle);
  }
}
