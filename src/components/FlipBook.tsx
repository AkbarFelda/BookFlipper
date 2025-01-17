import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const FlipBook = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flipbook Using Flipbook Maker</Text>
      <WebView
        source={{
          uri: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=fu56p2gym'
        }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        scrollEnabled={false}
        bounces={false}
        automaticallyAdjustContentInsets={false}
        // Handle loading errors
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        // Optional loading indicator
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <Text>Loading flipbook...</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  webview: {
    flex: 1,
    height: Dimensions.get('window').height * 0.6, 
    width: Dimensions.get('window').width * 0.98,
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlipBook;