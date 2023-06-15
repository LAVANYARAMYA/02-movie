import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: any;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const movieId = route.get('id');
      this.moviesService.getMovieById(movieId as string).subscribe((data) => {
        data.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
          data.trailer
        ) as string;

        this.movie = data;
      });
    });
  }

}
