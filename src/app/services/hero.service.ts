import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../types/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeroes():Hero[]{
    return HEROES
  }

}
