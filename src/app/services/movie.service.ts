import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(
    @Inject('ApiRoot') private apiRoot,
    private http: HttpClient
  ) { }
  

   getAllMovies(){
    this.http.get(`${this.apiRoot}/api/movies/movielist`).subscribe( movies => {
      console.log(movies);
    })
  } 
  
}
