import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() navItemSelected = new EventEmitter<string>();
    onNavItemSelected(navItemString: string) {
        this.navItemSelected.emit(navItemString);
    }
}