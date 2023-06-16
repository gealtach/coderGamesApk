import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { s } from 'react-native-wind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeFromCart } from '../redux/CartReducer';

const CartState = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const deleteFromCartHandler = (id: number) => {
    dispatch(removeFromCart({id}));
    return;
  }  

  return (
    <View style={s`flex-1 h-full`}>
      {cart && cart.map((item) => 
        <View key={item.id} style={s`bg-pink-500 p-2 m-2 rounded-xl`}>
          <Image style={s`rounded-xl h-32 mb-4`} source={{ uri: item.thumbnail }} />
          <View>
            <View style={s`flex-auto flex-row justify-around`}>
              <Text style={s`text-white`}>ID: {item.id}</Text>
              <Text style={s`text-white`}>Title: {item.title}</Text>
              <Text style={s`text-white`}>Price: {item.price} USD</Text>
            </View>
            <TouchableOpacity style={s`flex-auto items-center m-2`} onPress={() => deleteFromCartHandler(item.id)}>
              <MaterialCommunityIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartState;
