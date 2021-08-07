import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native';

const Debugger = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewContainer}>
        <Text>{new Date().toString()}</Text>
        <Text>Hello world 1. 测试 1.0 版本</Text>
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

export default Debugger;
