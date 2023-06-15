import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concatMap, switchMap } from 'rxjs';
import { MoviesService } from '../movies.service';

export interface Movie {
  id: string;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movieList$:any;

  constructor(private http: HttpClient,private moviesService: MoviesService ){}

  ngOnInit()
  {
    this.movieList$=this.moviesService.getMovies();

    // console.log(this.movieList$)
  }

  deleteGetMovie(id:string)
  {
    this.movieList$=this.moviesService.deleteGetMovie(id);
  }


  trackByFn(index: number, mv: Movie) {
    return mv.id;
  }

}
