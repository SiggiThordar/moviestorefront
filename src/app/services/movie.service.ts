import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from '../models/movie';

@Injectable()
export class MovieService {

  constructor(
    @Inject('ApiRoot') private apiRoot,
    private http: HttpClient
  ) { }
  

  getAllMovies(): Observable<movie[]> {
     return this.http.get<movie[]>(`${this.apiRoot}/api/movies/movielist`);
  }

  getAllRents(): Observable<any>{
    return this.http.get(`${this.apiRoot}/api/rent/user`);
  }
}
