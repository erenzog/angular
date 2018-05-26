import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant: Restaurant;
  
    constructor (
      private route: ActivatedRoute,
      private restaurantService: RestaurantService,
      private location: Location
    ) {}
    
    getRestaurants(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.restaurantService.getRestaurants(id)
        .subscribe(restaurant => this.restaurant = restaurant);
    }

    ngOnInit(): void {
      this.getRestaurants();
    }
    
      goBack(): void {
        this.location.back();
      }

}
