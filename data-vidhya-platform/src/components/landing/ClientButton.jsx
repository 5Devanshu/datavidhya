'use client';

import React from 'react';

// This is a client component that can use event handlers
const ClientButton = ({ children, className, onClick }) => {
  return (
    <button 
      className={className} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ClientButton;