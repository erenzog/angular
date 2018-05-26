import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../restaurant';
@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant: Restaurant;
  
  constructor() { }

  ngOnInit() {
  }

}
