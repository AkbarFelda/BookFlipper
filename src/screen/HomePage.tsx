import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import EbookCarousel from '../components/Ebookcarousel';
import { useNavigation } from '@react-navigation/native';

interface HomepageProps {}

const Homepage = (props: HomepageProps) => {
  const navigation = useNavigation<any>();

  const handleFlipbookWebView = () => {
    navigation.navigate('FlipBook'); // Pastikan ada screen dengan nama ini di navigasi
  };

  const handleFlipbookCarousel = () => {
    navigation.navigate('Carousel'); // Pastikan ada screen dengan nama ini di navigasi
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Rekomendasi Bacaan</Text>
      <EbookCarousel />

      <TouchableOpacity style={styles.button} onPress={handleFlipbookWebView}>
        <Text style={styles.buttonText}>Buka Flipbook (WebView)</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={handleFlipbookCarousel}>
        <Text style={styles.buttonText}>Buka Flipbook (Carousel)</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
