import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  iconClass = 'fa-regular fa-thumbs-up';
  like(): void {
    if (this.iconClass == 'fa-regular fa-thumbs-up') {
      this.iconClass = 'fa-solid fa-thumbs-up';
    } else if (this.iconClass == 'fa-solid fa-thumbs-up') {
      this.iconClass = 'fa-regular fa-thumbs-up';
    }
  }
}
