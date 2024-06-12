import React from 'react';

function calculateStatistics(sessions) {
  const totalSessions = sessions.length;
  const totalProfitLoss = sessions.reduce((acc, session) => acc + session.profit, 0);
  const averageProfitLoss = totalSessions > 0 ? totalProfitLoss / totalSessions : 0;
  const totalHoursPlayed = sessions.reduce((acc, session) => acc + session.duration, 0);
  const averageHourlyRate = totalHoursPlayed > 0 ? totalProfitLoss / totalHoursPlayed : 0;
  const bestSession = sessions.reduce((best, session) => (session.profit > (best?.profit || -Infinity) ? session : best), null);
  const worstSession = sessions.reduce((worst, session) => (session.profit < (worst?.profit || Infinity) ? session : worst), null);
  const winRate = totalSessions > 0 ? (sessions.filter(session => session.profit > 0).length / totalSessions) * 100 : 0;

  return {
    totalSessions,
    totalProfitLoss,
    averageProfitLoss,
    totalHoursPlayed,
    averageHourlyRate,
    bestSession,
    worstSession,
    winRate,
  };
}

function StatisticsPanel({ sessions }) {
  const stats = calculateStatistics(sessions);

  return (
    <div className="statistics-panel">
      <h2>Overall Statistics</h2>
      <p>Total Sessions: {stats.totalSessions}</p>
      <p>Total Profit/Loss: ${stats.totalProfitLoss.toFixed(2)}</p>
      <p>Average Profit/Loss per Session: ${stats.averageProfitLoss.toFixed(2)}</p>
      <p>Total Hours Played: {stats.totalHoursPlayed} hours</p>
      <p>Average Hourly Rate: ${stats.averageHourlyRate.toFixed(2)} per hour</p>
      <p>Best Session: {stats.bestSession ? `$${stats.bestSession.profit} on ${stats.bestSession.date}` : 'N/A'}</p>
      <p>Worst Session: {stats.worstSession ? `$${stats.worstSession.profit} on ${stats.worstSession.date}` : 'N/A'}</p>
      <p>Win Rate: {stats.winRate.toFixed(2)}%</p>
    </div>
  );
}

export default StatisticsPanel;
