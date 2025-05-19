import React from 'react';
import TrendingList from './TrendingList';

const TrendingHashtags = () => {
  const trendingHashtags = [
    "#AIArt",
    "#TravelGram",
    "#InstaGood",
    "#MondayMotivation",
    "#NoFilter",
    "#LifeGoals",
    "#FitnessFreak",
    "#ThrowbackThursday",
  ];

  return (
    <TrendingList 
      title="Trending Hashtags"
      items={trendingHashtags}
    />
  );
};

export default TrendingHashtags;
