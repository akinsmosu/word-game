import React from 'react';

function GameOverBanner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default GameOverBanner;
