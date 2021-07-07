import React from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import Stacks from './Stacks';
import {name as appName} from './app.json';
import {x, Closure} from 'react-native-harmony';
import {useEffect} from 'react';

const TestMyPackages = props => {
  useEffect(() => {
    console.log('');
    return () => {};
  }, []);

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
    backgroundColor: '#f0f0f0',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent(appName, () => TestMyPackages);
