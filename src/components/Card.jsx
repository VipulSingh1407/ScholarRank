import React from 'react';

function Card({ className, children }) {
  return (
    <div className={`p-6 bg-muted rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default Card;
