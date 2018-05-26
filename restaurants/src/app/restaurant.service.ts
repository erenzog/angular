import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Restaurant } from './restaurant';
import { RESTAURANTS } from './restaurant-list';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  
  getRestaurants(id: number): Observable<Restaurant> {
    return of(RESTAURANTS.find(restaurant => restaurant.id === id));
  }

  constructor() { }
}
