import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/routed/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movie/list', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyRoutedComponents = [
  MovieListComponent
]
