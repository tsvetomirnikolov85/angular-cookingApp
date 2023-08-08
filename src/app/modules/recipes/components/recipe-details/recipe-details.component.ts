import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let id = '';
    this.route.params.subscribe((p) => {
    });
  }
}
