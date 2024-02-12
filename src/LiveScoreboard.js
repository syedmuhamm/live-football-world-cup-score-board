import React, { useState } from 'react';
import OngoingMatch from './OngoingMatch';
import MatchSummary from './MatchSummary';

function LiveScoreboard() {
  const [matches, setMatches] = useState([]);

  // Function to start a new game
  const startGame = (homeTeam, awayTeam) => {
    const newMatch = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0
    };
    setMatches([...matches, newMatch]);
  };

  // Function to update score
  const updateScore = (index, homeScore, awayScore) => {
    setMatches(prevMatches => {
      const updatedMatches = [...prevMatches];
      updatedMatches[index].homeScore = homeScore;
      updatedMatches[index].awayScore = awayScore;
      return updatedMatches;
    });
  };

  // Function to finish game
  const finishGame = (index) => {
    setMatches(prevMatches => {
      const updatedMatches = [...prevMatches];
      updatedMatches.splice(index, 1);
      return updatedMatches;
    });
  };

  // Function to get summary of ongoing matches
  const getSummary = () => {
    const sortedMatches = [...matches].sort((a, b) => {
      const totalScoreA = a.homeScore + a.awayScore;
      const totalScoreB = b.homeScore + b.awayScore;
      if (totalScoreA !== totalScoreB) {
        return totalScoreB - totalScoreA;
      } else {
        return matches.indexOf(b) - matches.indexOf(a);
      }
    });
    return sortedMatches;
  };

  return (
    <div>
      <h1>Live Football World Cup Scoreboard</h1>
      {/* Ongoing Matches Section */}
      <div>
        <h2>Ongoing Matches</h2>
        {matches.map((match, index) => (
          <OngoingMatch
            key={index}
            match={match}
            onUpdateScore={(homeScore, awayScore) => updateScore(index, homeScore, awayScore)}
            onFinishGame={() => finishGame(index)}
          />
        ))}
      </div>
      {/* Match Summary Section */}
      <div>
        <h2>Match Summary</h2>
        <ol>
          {getSummary().map((match, index) => (
            <MatchSummary key={index} match={match} />
          ))}
        </ol>
      </div>
      {/* Start New Game Section */}
      <div>
        <h2>Start New Game</h2>
        <button onClick={() => startGame("Home Team", "Away Team")}>Start New Game</button>
      </div>
    </div>
  );
}

export default LiveScoreboard;