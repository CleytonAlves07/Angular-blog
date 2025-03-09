import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCardComponent } from "./components/main-card/main-card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SideCardsComponent } from "./components/side-cards/side-cards.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainCardComponent,
    NavbarComponent,
    SideCardsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
