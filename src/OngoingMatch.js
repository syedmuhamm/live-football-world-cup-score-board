import React from 'react';

function OngoingMatch({ match, onUpdateScore, onFinishGame }) {
  const { homeTeam, awayTeam, homeScore, awayScore } = match;

  // Handler for updating score
  const handleUpdateScore = () => {
    const newHomeScore = prompt(`Enter new score for ${homeTeam}:`);
    const newAwayScore = prompt(`Enter new score for ${awayTeam}:`);
    onUpdateScore(newHomeScore, newAwayScore);
  };

  // Handler for finishing the game
  const handleFinishGame = () => {
    onFinishGame();
  };

  return (
    <div>
      <h2>{homeTeam} vs {awayTeam}</h2>
      <p>Score: {homeScore} - {awayScore}</p>
      <button onClick={handleUpdateScore}>Update Score</button>
      <button onClick={handleFinishGame}>Finish Game</button>
    </div>
  );
}

export default OngoingMatch;