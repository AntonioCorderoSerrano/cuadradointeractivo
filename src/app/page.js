'use client'
import { useState } from 'react';
import '../styles/styles.css';

export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="page-container">
      <div
        className={`interactive-square ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

