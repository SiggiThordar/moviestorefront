import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  loggedIn: boolean;
  constructor(
  public movieService: MovieService,
  public authService: AuthService
  ) { }
  
  ngOnInit() {
    this.movieService.getAllRents();
    let user = this.authService.checkUser();

    if(user){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    
    console.log("Logged in: " + this.loggedIn);
  }
  
}



  