import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { s } from 'react-native-wind';
import CustomButton from '../components/CustomButtom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

interface InputState {
    email: string;
    password: string;
  }

const LoginScreen = () => {
    const [input, setInput] = useState<InputState>({ email: '', password: '' });
    const [ error, setError ] = useState(null)
    const navigate = useNavigation<NavigationProp<ParamListBase>>();
    
    useEffect(()=> {
      const unsuscribe = auth.onAuthStateChanged((user) => {
        if(user) { navigate.navigate('home')}
      })
      return unsuscribe;
    }, [])

    const handleSignUp = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
          const user = userCredential.user;
          setInput({email: '', password: ''})
          console.log('User created:', user);
          // Perform any additional actions after successful user creation
        } catch (error: any) {
          setError(error.message)
          console.log('User creation failed:', error.message);
          // Handle user creation error
        }
      };
      const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, input.email, input.password);
          console.log('Login successful!');
          // Perform any additional actions after successful login
        } catch (error: any) {
          console.log('Login failed:', error.message);
          setError(error.message)
          // Handle login error
        }
      };

    return (
        <KeyboardAvoidingView
            style={s`flex-1 items-center justify-center border-2 border-purple-900`}
            behavior='padding'
        >
            <View>
              <TextInput 
                placeholder='example@example.com'
                value={input.email}
                onChange={text => setInput({...input, email: text.nativeEvent.text})}
                style={s`bg-blue-400 p-2 m-1 rounded-xl text-sm text-white`}
              />
              <TextInput 
                placeholder='password'
                value={input.password}
                onChange={text => setInput({...input, password: text.nativeEvent.text})}
                style={s`bg-blue-400 p-2 m-1 rounded-xl text-sm text-white`}
                secureTextEntry
              />
              <CustomButton 
              text='SignUp'
              touchStyle='bg-purple-500 p-2 m-1 rounded-xl items-center'
              onPress={handleSignUp}
              />
              <CustomButton 
              text='LogIn'
              touchStyle='bg-pink-500 p-2 m-1 rounded-xl items-center'
              onPress={handleLogin}
              />
              {error && <Text style={s`m-2 text-red-600`}>{error}</Text>}
              
            </View>
        </KeyboardAvoidingView>
    ) 
}

export default LoginScreen;