import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule,  MyRoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { AccountDropdownComponent } from './components/core/account-dropdown/account-dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    MyRoutedComponents,
    AccountDropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [
    {provide: 'ApiRoot', useValue: 'http://localhost:63639/' },
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
