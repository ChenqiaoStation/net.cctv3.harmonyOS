import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Button, TabNavigator, x, Closure, TabBar} from '../../test';
import {useState} from 'react';

const TestButton = () => {
  return (
    <View style={styles.view}>
      <Button
        style={{borderRadius: 8}}
        disabled={false}
        onPress={() => {}}
        text="测试 2D 扁平按钮"
        skin="2d"
      />
      <View style={{height: 8}} />
      <Button
        style={{borderRadius: 8}}
        disabled={false}
        onPress={() => {}}
        text="测试 3D 立体按钮"
        skin="3d"
        elevation={6}
      />
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

export default TestButton;
