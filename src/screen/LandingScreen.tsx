import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LandingScreenProps {}

const LandingScreen = (props: LandingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {}
});
