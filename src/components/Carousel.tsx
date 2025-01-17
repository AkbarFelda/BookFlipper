import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';

const Flipbook = () => {
  const { width, height } = Dimensions.get('window');
  const [currentPage, setCurrentPage] = useState(0);
  const [flipAnimation] = useState(new Animated.Value(0));

  const pages = [
    {
      id: 1,
      leftImage: 'https://example.com/image1.jpg',
      rightImage: 'https://example.com/image2.jpg',
      leftText: 'Apple',
      rightText: 'Magic',
      author: 'Samuel G. Mwangi',
    },
    {
      id: 2,
      leftImage: 'https://example.com/image3.jpg',
      rightImage: 'https://example.com/image4.jpg',
      leftText: 'Music',
      rightText: 'Gothic',
      author: 'Samuel G. Mwangi',
    },
    // Add more pages here...
  ];

  const flipPage = (direction: 'next' | 'prev') => {
    const toValue = direction === 'next' ? 1 : -1;

    Animated.timing(flipAnimation, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentPage((prevPage) => {
        if (direction === 'next') {
          return prevPage < pages.length - 1 ? prevPage + 1 : prevPage;
        } else {
          return prevPage > 0 ? prevPage - 1 : prevPage;
        }
      });
      flipAnimation.setValue(0); // Reset animation after page flip
    });
  };

  const current = pages[currentPage];

  const rotateInterpolate = flipAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-180deg', '0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flipbook Example</Text>

      <Animated.View
        style={[
          styles.pageContainer,
          {
            transform: [
              {
                rotateY: rotateInterpolate, // Add 3D rotation for flip effect
              },
            ],
          },
        ]}
      >
        <View style={[styles.page, { width: width / 2 }]}>
          <Image source={{ uri: current.leftImage }} style={styles.image} />
          <Text style={styles.pageText}>{current.leftText}</Text>
          <Text style={styles.author}>{current.author}</Text>
        </View>

        <View style={[styles.page, { width: width / 2 }]}>
          <Image source={{ uri: current.rightImage }} style={styles.image} />
          <Text style={styles.pageText}>{current.rightText}</Text>
        </View>
      </Animated.View>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => flipPage('prev')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => flipPage('next')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // Removed perspective from here and added to Animated.View
  },
  page: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Flipbook;
