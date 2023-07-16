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
  searchQuery!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadMovies();
  }
  
  loadMovies(): void {
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

  search(): void {
    if (this.searchQuery) {
      this.http.get<any[]>(`https://api.tvmaze.com/search/shows?q=${this.searchQuery}`)
        .subscribe((response) => {
          this.movies = response.map((result) => ({
            id: result.show.id,
            name: result.show.name
          }));
        });
    } else {
      this.loadMovies();
    }
  }


  
}

