import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
