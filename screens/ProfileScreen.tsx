import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButtom';
import { s } from 'react-native-wind';
import { auth } from '../firebase';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigate = useNavigation<NavigationProp<ParamListBase>>();
  const handleLogOut = () => {
    console.log('hola');
    auth.signOut().then(() => navigate.reset({
      index: 0,
      routes: [{ name: 'login' }],
    }));
  }

  return (
    <View style={s`flex-1 items-center`}>
      <CustomButton 
              text='LogOut'
              touchStyle='w-1/2 bg-purple-500 p-2 m-2 rounded-xl items-center'
              onPress={handleLogOut}
              />
    </View>
  );
};

export default ProfileScreen;
