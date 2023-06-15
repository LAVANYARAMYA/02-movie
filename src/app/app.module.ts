import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CounterComponent } from './counter/counter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';




const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/add', component: AddMovieComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    CounterComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
