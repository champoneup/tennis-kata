//
// Your implementations
// 
class Game {
    constructor(
        public player1: number,
        public player2: number
    ){}

    get winner(): string {
        if ((this.player1 - this.player2) >= 2 ) {return 'Player 1'}
        if ((this.player2 - this.player1) >= 2 ) {return 'Player 2'}
        if (this.player1 <= 5 && this.player2 <= 5) {return 'On Going'}
        return this.player1 > this.player2 ? 'Player 1': 'Player 2';
    }
}

export function updateGameScore(player1: number, player2: number): Game{
    return new Game(player1, player2);
}

export function decideGameWinner(game: Game):string {
    return game.winner;
}

export function printScore(score: number[]):string {
    const scoreDetail = ['love', 'fifteen', 'thirty','forty']
    if (score[0] >= 3 && score[1] >= 3){
        if(score[0] === score[1]){
            return 'deuce'
        }
        else if(score[0] - score[1] == 1 || score[0] - score[1] == -1){
            return score[0] > score[1] ? 'advantage player 1': 'advantage player 2'; 
        }
    } else {
        if (score[0] !== score[1]){
            return scoreDetail[score[0]] + ' - ' + scoreDetail[score[1]]
        } else {
            return scoreDetail[score[0]] + ' - ' + scoreDetail[score[1]]
        }
    }
}
