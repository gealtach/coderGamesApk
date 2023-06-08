import React from 'react';
import { View, Text, Image } from 'react-native';
import { s } from 'react-native-wind';

interface CardProps {
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
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <View style={s`border-2 border-white m-1 rounded-xl`}>
      <Image style={s`rounded-xl h-32`} source={{ uri: data.thumbnail }} />
      <Text>{data.title}</Text>
      <Text>{data.short_description}</Text>
      {/* Render additional details as needed */}
      <Text>Genre: {data.genre}</Text>
      <Text>Platform: {data.platform}</Text>
      <Text>Publisher: {data.publisher}</Text>
    </View>
  );
};

export default Card;