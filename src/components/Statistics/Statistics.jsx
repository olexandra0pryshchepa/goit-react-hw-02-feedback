import React from 'react';

export const Statistics = ({ good, bad, neutral, total, percentage }) => {
  if (total === 0) {
    return <p>There is no feedback</p>;
  }
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage} %</li>
      </ul>
    </div>
  );
};
