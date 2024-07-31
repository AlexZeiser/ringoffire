import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private firestore: Firestore, private router: Router) { }

  /* startGame() {
    let game = new Game();
    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameInfo: any) => {
        this.router.navigateByUrl('/game/' + gameInfo);
      });
  } */
  async startGame() {
    let game = new Game();
    const gamesCollection = collection(this.firestore, 'games');
    try {
      const gameInfo = await addDoc(gamesCollection, game.toJson());
      this.router.navigateByUrl('/game/' + gameInfo.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
}
