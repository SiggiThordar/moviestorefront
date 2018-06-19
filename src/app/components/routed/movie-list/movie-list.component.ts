import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    
  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getAllMovies();
  }


}
