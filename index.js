import React from 'react';
import {AppRegistry, View, StyleSheet, Platform, StatusBar} from 'react-native';
import Stacks from './Stacks';
import {name as appName} from './app.json';
import {x, Closure} from './src/test';
import {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import moment from 'moment';

const TestMyPackages = props => {
  useEffect(() => {
    console.log('init closure state:', Closure.getState());
    console.log('Week in this year:', moment('2021-07-02').week());
  }, [Closure.getState()]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.viewContainer}>
        <Stacks />
      </View>
      <View style={styles.viewBottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBottomSpace: {
    height: x.iPhone11.getBottomSpace(),
    backgroundColor: 'white',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent(appName, () => TestMyPackages);
