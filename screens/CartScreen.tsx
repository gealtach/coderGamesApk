import React from 'react';
import { View, Text, Image } from 'react-native';
import CartState from '../components/CartState';
import { s } from 'react-native-wind';
import { ScrollView } from 'react-native-gesture-handler';

const CarScreen = () => {
  
  return (
    <ScrollView>
      <View style={s`flex-auto`}>
        <CartState />
      </View>
    </ScrollView>
  );
};

export default CarScreen;
