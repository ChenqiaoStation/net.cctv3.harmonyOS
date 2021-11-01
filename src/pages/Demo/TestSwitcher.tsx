import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

import {Button, TabNavigator, x, Closure} from '../../react-native-harmonyOS';
import {useState} from 'react';
import {Switcher} from '../../react-native-harmonyOS';

const TestSwitcher = () => {
  return (
    <View style={styles.viewContainer}>
      <Switcher
        status={false}
        onStatusChange={status => {}}
        activeColor="#8dc642"
      />
      <View style={{width: 16}} />
      <Switcher
        status={true}
        onStatusChange={status => {}}
        activeColor="#8dc642"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});

export default TestSwitcher;
