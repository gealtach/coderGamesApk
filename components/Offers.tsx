import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { offers } from '../data';
import { s } from 'react-native-wind';

interface CarouselItem {
  id: number;
  title: string;
  thumbnail: string;
}

const MyCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View style={s`border-2 border-white rounded-xl m-3 p-2 bg-pink-700`}>
      <TouchableOpacity>
        <Text style={s`text-white m-2`}>{item.title}</Text>
        <Image style={s`rounded-xl h-32`} source={{ uri: item.thumbnail }} />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <Text style={s`text-4xl text-white`}>Offers!!</Text>
        <Carousel
          data={offers} // Use the imported offers data
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={200}
          onSnapToItem={(index) => setActiveIndex(index)}
          activeSlideAlignment="center"
          activeSlideOffset={10}
          activeAnimationType="timing"
          loop={true} // Enable looping through the items
          autoplay={false} // Disable default autoplay
          firstItem={activeIndex}
          containerCustomStyle={{ flexGrow: 0 }}
        />
    </>
  );
};

export default MyCarousel;
