import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name={'search'} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Search'}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 35,
    marginRight: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;