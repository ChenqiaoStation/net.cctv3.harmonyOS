/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {Button, TabNavigator, x, Closure} from '../../test';
import {useState} from 'react';
import {Switcher} from '../../test';

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
