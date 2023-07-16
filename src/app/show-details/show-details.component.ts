import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Show {
  name: string;
  genres: string[];
  premiered: string;
  status: string;
  runtime: number;
  rating: {
    average: number;
  };
  officialSite: string;
  summary: string;
}

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showId!: number;
  show!: Show;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.showId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<Show>(`https://api.tvmaze.com/shows/${this.showId}`)
      .subscribe((response) => {
        this.show = response;
      });
  }
}
