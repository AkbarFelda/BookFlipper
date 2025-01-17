import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const bookData = [
  {
    id: 1,
    image: { uri: 'https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg' },
    title: "True Stalker",
    author: "Sirhayani",
    tag: "cool, fun, hurt",
    views: "33.3 Jt",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    image: { uri: 'https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg' },
    title: "Mr. RIGHT",
    author: "Defanny",
    tag: "hurt",
    views: "2.81 Jt",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    image: { uri: 'https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg' },
    title: "A Feather Away",
    author: "Eternal Blooms",
    tag: "fun",
    views: "88.3 K",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 4,
    image: { uri: 'https://i5.walmartimages.com/asr/b86a004c-80a9-485c-b0ff-c4bd43733e66_1.7f741eff10cc3e9a2a6e5953d8051faa.jpeg' },
    title: "Apple of My Eye",
    author: "Author Name",
    tag: "lucu",
    views: "2.8 Jt",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
];

const EbookCarousel = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {bookData.map((book) => (
          <TouchableOpacity key={book.id} style={styles.bookContainer}>
            <Image
              source={book.image}
              style={styles.bookImage}
              resizeMode="cover"
            />
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle}>{book.title}</Text>
            </View>
            <Text style={styles.bookViews}>{book.views}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  bookContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  bookImage: {
    width: 112, // 28 * 4 = 112
    height: 160, // 40 * 4 = 160
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitleContainer: {
    backgroundColor: '#4B5563', // gray-700
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
  },
  bookTitle: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  bookViews: {
    color: '#000000',
    fontSize: 12,
    marginTop: 4,
  },
});

export default EbookCarousel;
 