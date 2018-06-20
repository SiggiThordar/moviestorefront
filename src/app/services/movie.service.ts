import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  allmovies: any;
  allrents: any;
  constructor(
    @Inject('ApiRoot') private apiRoot,
    private http: HttpClient
  ) { }
  

   getAllMovies(){
    this.http.get(`${this.apiRoot}/api/movies/movielist`).subscribe( movies => { this.allmovies = movies;
      console.log(movies);
    })
  }

  getAllRents(){
    this.http.get(`${this.apiRoot}/api/rent/user`).subscribe( rents => { this.allrents = rents;
    console.log(rents);
    })
  }
  
  
  
}
