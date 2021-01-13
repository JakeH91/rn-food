import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price)
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length > 0 && <Text style={styles.errorStyle}>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList title={'Cost Effective'} data={filterResultsByPrice('$')} />
        <ResultsList title={'Bit Pricier'} data={filterResultsByPrice('$$')} />
        <ResultsList title={'Big Spender'} data={filterResultsByPrice('$$$')} />
      </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
  }
});

export default SearchScreen;