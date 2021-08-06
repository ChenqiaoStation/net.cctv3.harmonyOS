import React from 'react';
import {StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native';

const GoogleMap = props => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewContainer}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
  },
});

export default GoogleMap;