import React from 'react';

function MatchSummary({ match }) {
  const { homeTeam, awayTeam, homeScore, awayScore } = match;

  return (
    <li>{homeTeam} {homeScore} - {awayScore} {awayTeam}</li>
  );
}

export default MatchSummary;
