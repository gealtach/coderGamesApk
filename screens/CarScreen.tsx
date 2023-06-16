import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CarScreen = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    cart && cart.map((item) => 
    <View key={item.id}>
      <Text>ID: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Price: {item.price} USD</Text>
    </View>)
  );
};

export default CarScreen;
