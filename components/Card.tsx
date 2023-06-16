import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { s } from 'react-native-wind';
import CustomButton from './CustomButtom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';
import { RootState } from '../redux/store';

interface CardProps {
  data: {
    id: number;
    price: number;
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
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [ inCart, setInCart ] = useState(false);
  const dispatch = useDispatch();
  const { id, title, price, thumbnail } = data;
  const addCartHandler = () => {
    dispatch(addToCart({id, title, price, thumbnail}));
  }

  useEffect(() => {
    const filtered = cart.filter((item) => item.id === id);
    if(filtered.length > 0) setInCart(true)
    else setInCart(false)
  }, [cart])

  return (
    <View style={s`border-2 border-white m-1 rounded-xl`}>
      <Image style={s`rounded-xl h-32`} source={{ uri: data.thumbnail }} />
      <Text>{data.title}</Text>
      <Text>{data.short_description}</Text>
      {/* Render additional details as needed */}
      <Text>Genre: {data.genre}</Text>
      <Text>Platform: {data.platform}</Text>
      <Text>Publisher: {data.publisher}</Text>
      <Text>Price: {data.price}</Text>
      <CustomButton 
        text='add to car'
        touchStyle={inCart ? 'bg-red-100 w-1/5 items-center m-2 rounded-xl p-2' : 'bg-red-500 w-1/5 items-center m-2 rounded-xl p-2'}
        textStyle='text-white'
        onPress={addCartHandler}
        disabled={inCart}
      />
    </View>
  );
};

export default Card;