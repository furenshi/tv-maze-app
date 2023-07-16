import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Movie {
  id: number;
  name: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies!: Movie[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('https://api.tvmaze.com/shows')
      .subscribe((response) => {
        this.movies = response.map((movie) => ({
          id: movie.id,
          name: movie.name
        }));
      });
  }

  showDetails(movieId: number) {
    this.router.navigate(['/show', movieId]);
    
  }


  
}

