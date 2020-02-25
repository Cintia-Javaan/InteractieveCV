import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  vierkant: any[];
  xIsNext: boolean;
  winner: string;
  draw: boolean;
  numberOfMoves: number;

  constructor() { }

  ngOnInit(): void {

    this.newGame();
  }

  newGame(){
    this.vierkant = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.draw = false;
    this.numberOfMoves = 0;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx:number){
    if(!this.vierkant[idx]){
      this.vierkant.splice(idx, 1, this.player);
      this.xIsNext =!this.xIsNext;
    }
    this.numberOfMoves++;
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.vierkant[a] &&
        this.vierkant[a] === this.vierkant[b] &&
        this.vierkant[a] === this.vierkant[c]
      ) {
        return this.vierkant[a];
      } 
    } 
    if (this.numberOfMoves == 9 && !this.winner
      ) {
        this.draw = true;
      }
    return null;
  }

}
