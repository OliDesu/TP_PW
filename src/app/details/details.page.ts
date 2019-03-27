import { Component, OnInit } from '@angular/core';
import { Movie } from '../home/home.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  movie:Movie;
  
  constructor(private readonly router: Router) {
    this.movie = router.getCurrentNavigation().extras.state as Movie;
   }

  ngOnInit() {
  }

}
