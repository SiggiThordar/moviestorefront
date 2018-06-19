import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    
  loggedIn: boolean;
  constructor(
    public movieService: MovieService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.movieService.getAllMovies();
    let user = this.authService.checkUser();
    if(user){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
    console.log(this.loggedIn);
  }



}
