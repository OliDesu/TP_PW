import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Movie{
  title:string;    //Nouveau struct pour les movies avec les details
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: Movie[] = [];

  constructor(
    private readonly router: Router
  ) {}

  getMovies(search:string):void{ 
    if(search.length > 2){
      this.movies = [{title:"Fight Club"}, {title:"Seigneur des aprojep"}];
    }
    else{
      this.movies = [];
    }
  }

  showDetails(movie:Movie):void{
    this.router.navigate(['/details'],{state:movie})
  }
}

