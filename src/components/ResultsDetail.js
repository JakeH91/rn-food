import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ResultsDetail = ({ title, image, rating, reviews }) => {
  return (
    <View style={styles.viewStyle}>
      {image.length ? 
        <Image style={styles.imageStyle} source={{ uri: image }} /> 
        : <Image style={styles.imageStyle} source={require('../../assets/icon.png')} />
      }
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.textStyle}>{rating} Stars, {reviews} Reviews</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 5,
    marginRight: 40,
    paddingLeft: 15,
  },
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  textStyle: {
    fontSize: 18,
    color: 'grey'
  }
});

export default ResultsDetail;