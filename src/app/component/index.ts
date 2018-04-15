import { CarouselComponent } from "./common/carousel/carousel.component";
import { LoadingComponent } from "./common/loading/loading.component";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

export const components = {
  AppComponent,
  componentDeclarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoadingComponent,
    CarouselComponent
  ]
};

export {
  AppComponent,
  HomeComponent,
  MovieListComponent,
  MovieDetailsComponent,
  LoadingComponent,
  CarouselComponent
};
