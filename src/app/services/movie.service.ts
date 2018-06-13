import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(
    @Inject('ApiRoot') private apiRoot,
    private http: HttpClient
  ) { }

  getAllMovies(){
    this.http.get('/api/movies/allmovies').subscribe( movie => {
      console.log(movie);
    })
  }
}
