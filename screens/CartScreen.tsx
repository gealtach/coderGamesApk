import React from 'react';
import { View, Text, Image } from 'react-native';
import CartState from '../components/CartState';
import { s } from 'react-native-wind';
import { ScrollView } from 'react-native-gesture-handler';
import CartButtumBar from '../components/CartButtumBar';

const CarScreen = () => {
  
  return (
    <ScrollView>
      <View style={s`flex-auto`}>
        <CartState />
        <CartButtumBar />
      </View>
    </ScrollView>
  );
};

export default CarScreen;
