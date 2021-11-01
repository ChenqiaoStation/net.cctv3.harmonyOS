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

import {Button, TabNavigator, x, Closure, TabBar, SeekBar} from '../../react-native-harmonyOS';
import {useState} from 'react';

const loadSeekBar = (
  dotSize: number,
  barHeight: number,
  activeColor: string,
) => {
  return (
    <SeekBar
      dotSize={dotSize}
      barHeight={barHeight}
      activeColor={activeColor}
      barWidth={Dimensions.get('screen').width - 48}
      onProgressChange={progress => {
        Closure.set('progress', progress);
        // console.log('current', Closure.getState());
      }}
    />
  );
};
const TestSeekBar = () => {
  return (
    <View style={styles.view}>
      {loadSeekBar(24, 4, '#987123')}
      <View style={{height: 12}} />
      {loadSeekBar(32, 34, undefined)}
      <View style={{height: 12}} />
      {loadSeekBar(32, 34, '#8ec541')}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
  },
});

export default TestSeekBar;
