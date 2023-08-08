import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { errorInterceptorProvider } from './shared/interceptors/error.interceptor';
import { RecipesModule } from './modules/recipes/recipes.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    RecipesModule,
  ],
  providers: [errorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
