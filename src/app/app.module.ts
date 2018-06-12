import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule,  MyRoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MyRoutedComponents,  
  ],
  imports: [
    BrowserModule,
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
