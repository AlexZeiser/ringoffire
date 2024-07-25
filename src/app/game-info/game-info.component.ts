import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  cardAction = [
    {
      title: 'Wasserfall', description: 'Herzlichen Glückwunsch! Trinke einen Shot!'
    },
    {
      title: 'Männer', description: 'Alle Männer trinken.'
    },
    {
      title: 'Frauen', description: 'Alle Frauen trinken.'
    },
    {
      title: 'Daumenmeister', description: 'Der Daumenmeister legt den Daumen auf den Tisch, der letzte, der es bemerkt, trinkt.'
    },
    {
      title: 'Frage', description: 'Stelle jemandem eine Frage. Diese Person muss dann einer anderen Person eine Frage stellen und so weiter. Wer zögert oder antwortet, trinkt.'
    },
    {
      title: 'Reim', description: 'Beginne mit einem Wort, und jeder muss ein Wort finden, das sich darauf reimt. Wer zögert oder keinen Reim findet, trinkt.'
    },
    {
      title: 'Kategorien', description: 'Wähle eine Kategorie, und jeder muss etwas aus dieser Kategorie nennen. Wer zögert oder nichts mehr einfällt, trinkt.'
    },
    {
      title: 'Meister', description: 'Der Meister kann jederzeit jemanden zum Trinken auffordern.'
    },
    {
      title: 'Schicksal', description: 'Bestimme jemandem, der trinken muss.'
    },
    {
      title: 'Regel', description: 'Erfinde eine neue Regel, die das Spiel erschwert. Jeder, der gegen die Regel verstößt, muss trinken.'
    },
    {
      title: 'Storytime', description: 'Beginne eine Geschichte mit einem Satz, und jeder muss einen Satz hinzufügen. Wer zögert oder keinen sinnvollen Satz hinzufügen kann, trinkt.'
    },
    {
      title: 'Wahrheit oder Pflicht', description: 'Wähle jemanden aus, der zwischen Wahrheit oder Pflicht wählen muss. Bei Weigerung trinkt die Person.'
    },
    {
      title: 'Klatschen', description: 'Beginne mit einmal Klatschen, der nächste zweimal und so weiter. Wer durcheinander kommt, trinkt.'
    }
  ];

  title: string = '';
  description: string = '';

  @Input() card!: string;


  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber].title;
      this.description = this.cardAction[cardNumber].description;
    }
  }
}
