import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const appRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'show/:id', component: ShowDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Add RouterModule with the defined routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
