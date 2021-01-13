import React from 'react';
import { Text, StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, data = [], navigation }) => {
  if(!data.length) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail 
                title={item.name}
                image={item.image_url}
                rating={item.rating}
                reviews={item.review_count}
              />
            </TouchableOpacity> 
          )
        }}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginBottom: 15,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});

export default withNavigation(ResultsList);