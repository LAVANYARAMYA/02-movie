import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap } from 'rxjs';
import { Movie } from './movie-list/movie-list.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }


  getMovies()
  {
    // console.log("entered api");
    return this.http.get(`https://648a951417f1536d65e94e85.mockapi.io/movies`)
  }
   
  deleteMovie(id: string) {
    // console.log('Deleting... movie', id);
    return this.http
      .delete(`https://648a951417f1536d65e94e85.mockapi.io/movies/${id}`)
      .pipe(catchError((err) => []));
  }

  // Delete -> GET
  deleteGetMovie(id: string) {
    return this.deleteMovie(id).pipe(concatMap(() => this.getMovies()));
  }


  addMovie(data: Movie) {
    return this.http
      .post('https://648a951417f1536d65e94e85.mockapi.io/movies', data)
      .pipe(catchError((err) => []));
  }

  getMovieById(id: string) {
    return this.http
      .get<Movie>(`https://60c98aa8772a760017203b57.mockapi.io/movies/${id}`)
      .pipe(catchError((err) => []));
  }


  
}
