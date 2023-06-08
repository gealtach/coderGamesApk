import React from 'react';
import { View } from 'react-native';
import Card from './Card';

interface CardContainerProps {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
  }[];
}

const GamesContainer: React.FC<CardContainerProps> = ({ data }) => {
  return (
    <View >
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </View>
  );
};

export default GamesContainer;