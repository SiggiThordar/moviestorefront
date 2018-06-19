import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule,  MyRoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { AccountDropdownComponent } from './components/core/account-dropdown/account-dropdown.component';

import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/core/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    MyRoutedComponents,
    AccountDropdownComponent,
    NavbarComponent    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [
    { provide: 'ApiRoot', useValue: 'http://localhost:63639' },
    AuthService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
