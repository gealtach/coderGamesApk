import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { s } from 'react-native-wind';

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
  touchStyle?: string;
  textStyle?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  touchStyle = 'bg-blue-500',
  textStyle = 'text-black',
  ...props
}) => {
  return (
    <TouchableOpacity
      style={s`${touchStyle}`}
      {...props}
    >
      <Text style={s`${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  );
};



export default CustomButton;
