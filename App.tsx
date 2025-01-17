import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './src/screen/HomePage';
import { RootStackParamList } from './src/types';
import SplashScreen from './src/screen/SplashScreen';
import LandingScreen from './src/screen/LandingScreen';
import BookDetail from './src/components/FlipBook';
import FlipBook from './src/components/FlipBook';
import CarouselComponent from './src/components/Carousel';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="HomePage" component={Homepage} />
        <Stack.Screen name="FlipBook" component={FlipBook} />
        <Stack.Screen name="Carousel" component={CarouselComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
