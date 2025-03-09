import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-side-cards',
  standalone: true,
  templateUrl: './side-cards.component.html',
  styleUrls: ['./side-cards.component.css'],
  imports: [NewsCardComponent]
})
export class SideCardsComponent {
  @Input() newsList: any[] = [];
  @Output() cardClicked = new EventEmitter<any>();

  onCardClick(news: any) {
    this.cardClicked.emit(news);
  }
}
