import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { s } from 'react-native-wind';
import Offers from '../components/Offers';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={s`bg-blue-500 w-full h-full flex-1 flex-col items-center`}>
        <Text style={s`text-3xl text-white m-4`}>Welcome</Text>
        <Offers />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
