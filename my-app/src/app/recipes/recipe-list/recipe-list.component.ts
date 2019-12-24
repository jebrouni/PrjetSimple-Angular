import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[] = [
    new Recipes('A test recipes', 'This is simply aa test', 'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg'),
    new Recipes('A test recipes', 'This is simply aa test', 'https://get.pxhere.com/photo/food-chicken-kitchen-recipe-recipes-crepes-cooking-crepe-dish-cuisine-ingredient-produce-dessert-1589195.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
