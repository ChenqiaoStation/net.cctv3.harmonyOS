import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, TabNavigator, x} from '../../test';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const TestGradient = () => {
  return (
    <View style={styles.view}>
      {Array.from(x.Colors.Gradient, (_, i) => {
        let item = x.Colors.Gradient[i];
        return (
          <LinearGradient
            key={i}
            colors={[item.start, item.end]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <View style={styles.viewItem} />
          </LinearGradient>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    display: 'flex',
  },
  viewItem: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});

export default TestGradient;
