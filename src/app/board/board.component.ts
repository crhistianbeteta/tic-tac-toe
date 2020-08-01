import { Component, OnInit } from '@angular/core';
import {faIcons,faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  gameIcon=faIcons;
  players: string[]=['X','O'];
  playerWithTurn:string;
  winner: string;
  squares: string[];

  constructor() { 
  }
  
  ngOnInit(): void {
    this.newGame();
    this.gameIcon=faPlay;
  }

  public newGame(){
    this.squares= Array(9).fill(null);
    this.winner=null;
    this.playerWithTurn = (Math.random()<0.5)?this.players[0]:this.players[1];

    
  }
  
  private finishGame(){
    this.winner= this.playerWithTurn;
  
  }

  makeMove(index:number){
    if(this.squares[index])
      return;
    
    this.squares[index]=this.playerWithTurn;
    
    this.isThereAWinner()?this.finishGame():!this.IsThereASquareAvailable()?this.winner="TIE":this.changeTurn();
  }


  private changeTurn(){
    this.playerWithTurn = (this.playerWithTurn==this.players[0])?this.players[1]:this.players[0]
  }
  private isThereAWinner():boolean{

    const winningCombinations = 
    [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];


   if(this.getTheSquaresOccupiedByAPlayerWithTurn()<3)
      return false;

    for (let i = 0; i < winningCombinations.length; i++) {
        const [s0,s1,s2] = winningCombinations[i];
      
        if(this.squares[s0] == this.playerWithTurn &&
           this.squares[s1]== this.playerWithTurn &&
           this.squares[s2] == this.playerWithTurn){

            return true;

          }
    }
    return false;
  }

  private getTheSquaresOccupiedByAPlayerWithTurn():number{
    let array = this.squares.filter(value => {
      if(value === this.playerWithTurn)
        return value;
    });
    return array.length;
  }

  private IsThereASquareAvailable():boolean{
    for (let i = 0; i < this.squares.length; i++) {
      if(!this.squares[i])
        return true;
    }
    return false;
  }
}
