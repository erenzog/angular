import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../retaurant';
import { RESTAURANTS } from '../restaurant-list';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  
  selectedRestaurant: Restaurant;
  
  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }
  
  restaurants = RESTAURANTS;
  
  restaurant: Restaurant = {
    id: 1,
    name: 'Five Guys'
  };

  constructor() { }

  ngOnInit() {
  }

}
