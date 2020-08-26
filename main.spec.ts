//
// Sample outputs

import { updateGameScore, decideGameWinner, printScore} from "./main";
import 'mocha';
import { expect } from 'chai';

describe('Game is On Going', () => { 
it('should win the game when the score is 0-0', () => {
    const game = updateGameScore(0, 0);
    const winner = decideGameWinner(game)
    expect(winner).equal('On Going');
});
it('should win the game when the score is 3-3', () => {
  const game = updateGameScore(3, 3);
  const winner = decideGameWinner(game)
  expect(winner).equal('On Going');
});
it('should win the game when the score is 4-4', () => {
  const game = updateGameScore(4, 4);
  const winner = decideGameWinner(game)
  expect(winner).equal('On Going');
});
it('should win the game when the score is 5-4 or 4-5', () => {
  const game = updateGameScore(5, 4);
  const winner = decideGameWinner(game)
  expect(winner).equal('On Going');

  const game1 = updateGameScore(4, 5);
  const winner1 = decideGameWinner(game1)
  expect(winner1).equal('On Going');
});
})


describe('Player 1', () => {
  it('should win the game when the score is 4-0', () => {
    // given
    const player1Points = 4;
    const player2Points = 0;

    // when
    const game = updateGameScore(player1Points, player2Points);
    const winner = decideGameWinner(game);

    // then
    expect(winner).equal('Player 1');
  });

  it('should win the game when the score is 5-3', () => {
    // given
    const player1Points = 5;
    const player2Points = 3;

    // when
    const game = updateGameScore(player1Points, player2Points);
    const winner = decideGameWinner(game);

    // then
    expect(winner).equal('Player 1');
  });
});

describe('Player 2', () => {
  it('should win the game when the score is 4-0', () => {
    // given
    const player1Points = 0;
    const player2Points = 4;

    // when
    const game = updateGameScore(player1Points, player2Points);
    const winner = decideGameWinner(game);

    // then
    expect(winner).equal('Player 2');
  });

  it('should win the game when the score is 3-5', () => {
    // given
    const player1Points = 3;
    const player2Points = 5;

    // when
    const game = updateGameScore(player1Points, player2Points);
    const winner = decideGameWinner(game);

    // then
    expect(winner).equal('Player 2');
  });
});

describe('Game', () => {
  it('should print thirty - thirty when the score is 0-0', () => {
    // given
    const player1Points = 0;
    const player2Points = 0;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('love - love');
  });

  it('should print thirty - thirty when the score is 1-1', () => {
    // given
    const player1Points = 1;
    const player2Points = 1;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('fifteen - fifteen');
  });
  it('should print thirty - thirty when the score is 2-2', () => {
    // given
    const player1Points = 2;
    const player2Points = 2;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('thirty - thirty');
  });

  it('should print deuce when the score is 3-3', () => {
    // given
    const player1Points = 3;
    const player2Points = 3;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('deuce');
  });

  it('should print advantage player 1 when the score is 4-3', () => {
    // given
    const player1Points = 4;
    const player2Points = 3;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('advantage player 1');
  });

  it('should print advantage player 2 when the score is 5-6', () => {
    // given
    const player1Points = 5;
    const player2Points = 6;

    // when
    const score = printScore([player1Points, player2Points]);

    // then
    expect(score).equal('advantage player 2');
  });
});