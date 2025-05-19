import React from 'react';
import TrendingList from './TrendingList';

const TrendingCaptions = () => {
  const trendingCaptions = [
    "Chasing sunsets 🌇",
    "Stay wild, moon child 🌙",
    "Lost in the moment ✨",
    "Leveling up my life 🚀",
    "Caffeine and confidence ☕💪",
    "Good vibes only ✌️",
    "Born to stand out 🌟",
    "Weekend mode: ON 🏖️",
  ];

  return (
    <TrendingList 
      title="Trending Captions"
      items={trendingCaptions}
    />
  );
};

export default TrendingCaptions;
