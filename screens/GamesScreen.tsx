import React from 'react';
import { View, ScrollView } from 'react-native';
import { s } from 'react-native-wind';
import GamesContainer from '../components/GamesContainer';
import { data } from '../data';

const GamesScreen = () => {
  return (
    <ScrollView>
      <View style={s`bg-blue-500 w-full h-full`}>
        <GamesContainer data={data} />
      </View>
    </ScrollView>
  );
};

export default GamesScreen;
