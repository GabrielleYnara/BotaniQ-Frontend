import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  navbarOpen: boolean = false;

  /**
   * Toggles between true or false, to expand or collapse the menu.
   */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
