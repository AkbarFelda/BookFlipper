import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {}
});
