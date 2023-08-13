import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { RecipesService } from 'src/app/modules/recipes/services/recipes.service';
import { Recipe } from 'src/app/modules/recipes/interfaces/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  userId!: string;
  loggedUserId!: any;
  user!: User;
  myRecipes!: Recipe[];

  ngOnInit(): void {
    const userFromStorage = localStorage.getItem('id');
    this.route.params.subscribe((p) => {
      this.loggedUserId = p['id'];
    });

    // if (userFromStorage != this.loggedUserId) {
    //   this.router.navigate([NotFoundComponent]);
    //   return;
    // }
    this.userService.getUSer(this.loggedUserId).subscribe((user) => {
      this.user = user;
    });
    this.recipeService.getMyRecipes(this.loggedUserId).subscribe((recipes) => {
      this.myRecipes = recipes;
    });
  }
}
