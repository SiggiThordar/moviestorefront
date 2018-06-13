import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/routed/movie-list/movie-list.component';
import { RegisterComponent } from './components/routed/register/register.component';
import { LoginComponent } from './components/routed/login/login.component';

const routes: Routes = [
  { path: 'movie/list', component: MovieListComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyRoutedComponents = [
  MovieListComponent,
  RegisterComponent,
  LoginComponent  
]
