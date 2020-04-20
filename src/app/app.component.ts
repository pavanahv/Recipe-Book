import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  navItem: string = 'recipe';
  onNavItemSelected(navItemString: string) {
    this.navItem = navItemString;
  }
}
