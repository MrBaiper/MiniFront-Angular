import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private authService: AuthService) { }

    get isAuthenticated() {
        return this.authService.isAuthenticated(); // Método que revisa si hay token
    }

    logout() {
        this.authService.logout();
    }
}







