import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

    /**Indicates whether the menu is in the expanded state */
    isExpanded = false;

    /**
     * Collapse menu
     */
    collapse() {
        this.isExpanded = false;
    }

    /**
     * Alter menu toggle
     */
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
