import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test name', 'Test description', 'https://www.handletheheat.com/wp-content/uploads/2018/08/Best-Chocolate-Cake-SQUARE.jpg'),
    new Recipe('Test name 2', 'Test description', 'https://www.handletheheat.com/wp-content/uploads/2018/08/Best-Chocolate-Cake-SQUARE.jpg')
  ];
  @Output() recipeListItemClicked = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  recipeClicked(recipe: Recipe) {
    this.recipeListItemClicked.emit(recipe);
  }

}
