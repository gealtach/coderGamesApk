import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { s } from 'react-native-wind';
import GamesContainer from '../components/GamesContainer';
import { data } from '../data';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={s`bg-blue-500 w-full h-full`}>
        <Text>Bitches</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
