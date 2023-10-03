# AngularCookingApp

You can clone this project from https://github.com/tsvetomirnikolov85/angular-cookingApp.git

## Navigate to project directory

cd angular-cookingApp

## Install Dependencies

Run command `npm install`

## Run in dev mode

Ren command ng serve --o and will access project on http://localhost:4200

## Main folder structure

src/
|-- app/
| | -- core/
| | |-- components/
| | | |-- header/
| | | |-- home/
| | -- modules/
| | |-- auth/
| | |-- recipes/
| | |-- user/
| |-- shared/
| | |-- components/
| | |-- interceptors/
| | |-- services/
| |-- app-routing.module.ts
| |-- app-component.css
| |-- app-component.html
| |-- app.component.ts
| |-- app.module.ts
| -- assets/
| |-- images/
| |-- styles/
|-- ...

## Modules

|-- core/

-- auth/
-- recipes/
-- user/

-- shared/

## Components

Header

    Description: Appears at the top of the page.
    Purpose: Provides easy access to different sections of the application and enhances user navigation.
    Usage: Include links to different views, user profile, and other relevant actions.

Login

    Description: A form where users can log in to their accounts.
    Purpose: Authenticate users and grant access to secure areas of the app.
    Usage: Display username/password fields and login button, implement authentication logic.

Register

    Description: A form where new users can register for an account.
    Purpose: Allow new users to create accounts and access app features.
    Usage: Collect user information like email, password, and registration details.

Add Recipe

    Description: A form for users to add new recipes.
    Purpose: Enable users to contribute content to the app, such as sharing their own recipes.
    Usage: Collect recipe details like title, ingredients, instructions, and images.

Edit Recipe

    Description: A form that allows users to edit existing recipes.
    Purpose: Provide users with the ability to update their shared recipes.
    Usage: Populate fields with existing data and allow users to modify and save changes.

Recipe Details

    Description: Displays detailed information about a specific recipe.
    Purpose: Present all the details of a recipe, including ingredients, instructions, and images.
    Usage: Retrieve data for a specific recipe and display it in an easy-to-read format.

Recipes List

    Description: Displays a list of recipes, as cards.
    Purpose: Showcase a collection of recipes available in the app.
    Usage: Fetch a list of recipes and display them in a visually appealing manner.

User Profile

    Description: Shows user-specific information and settings.
    Purpose: Allow users to manage their profiles, view their recipes, and adjust preferences.
    Usage: Display user details, manage account settings, and link to user-related actions.

## Services

AuthService

    Description: Manages user authentication and authorization.
    Purpose: Provides methods to log in, log out, and check user permissions.
    Usage: Used by components that require user authentication, such as login, registration, and user profile.

ErrorService

    Description: Handles error messages and notifications.
    Purpose: Centralizes error handling to provide consistent user feedback in case of failures.
    Usage: Used by components and services to handle and display error messages.

RecipeService

    Description: Manages data related to recipes.
    Purpose: Provides methods to fetch, add, edit, and delete recipes from a data source.
    Usage: Used by components responsible for displaying and managing recipes, such as recipe list, details, and editing.

## Directives

register-form-custom-validator.directive

    Description: This directive provides custom validation for the registration form fields.
    Purpose: Extends the built-in Angular validation to add specific validation rules to the registration form.
    Usage: Apply this directive to form fields in the registration component to enforce additional validation rules like password strength, username availability, etc.

add-recipe-custom-validator.directive

    Description: This directive provides custom validation for the fields in the recipe creation form.
    Purpose: Enhances the standard Angular form validation by adding custom validation logic for recipe-related fields.
    Usage: Use this directive within the add recipe component to ensure that ingredients, instructions, and other recipe-related fields meet specific criteria.

## Interceptors

error.interceptor.ts

     Description: This interceptor provides global error handling.

## Routing

app-routing.module

    Description: The main routing module that handles the overall navigation of your application.
    Purpose: Defines the routes for components that are not specific to authentication or recipes.
    Usage: Configure routes for the home page, user profile, or any other non-authentication or non-recipe related views.

auth-routing.module

    Description: A routing module dedicated to handling authentication-related components and views.
    Purpose: Manages routes for components like login, registration, and password reset.
    Usage: Specify routes for authentication-related views and manage navigation within the authentication flow.

recipe-routing.module

    Description: A routing module dedicated to handling recipe-related components and views.
    Purpose: Defines routes for components like recipe list, recipe details, adding/editing recipes, etc.
    Usage: Configure routes for all things related to managing recipes and displaying recipe-related content.
