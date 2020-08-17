import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] =[
    {id: 'r1',
     title: 'Schnitzel',
     imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
     ingredients: ['Pork Meat', 'French fries', 'Pilsner'],
    },
    {id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
    ingredients: ['Meat', 'Spaghetti', 'Olive Oil', 'Tomatoes'],
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
