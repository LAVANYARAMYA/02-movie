import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { Movie } from '../movie-list/movie-list.component';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

 
  addMovieForm = this.fb.group({
    name: ['', Validators.required],
    poster: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
  });
 

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
   private router: Router
  ) {}


  

  onSubmit()
  {
    if (this.addMovieForm.valid) {
      const newMovie = this.addMovieForm.value;
      // console.log(newMovie);
      this.moviesService.addMovie(newMovie as any).subscribe(() => {
         this.router.navigate(['/movies']);
      });
    }


    // this.Movie=this.moviesService.addMovie(Movie);
  }

  get name()
  {
    return this.addMovieForm.get('name');
  }
  get poster()
  {
    return this.addMovieForm.get('poster');
  }
  get rating()
  {
    return this.addMovieForm.get('rating');
  }
  get summary()
  {
    return this.addMovieForm.get('summary');
  }
  get trailer()
  {
    return this.addMovieForm.get('trailer');
  }

}
