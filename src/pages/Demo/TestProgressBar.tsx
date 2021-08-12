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

import {x, ProgressBar} from '../../test';
import tinycolor from 'tinycolor2';

const loadProgressBar = (active: boolean) => {
  let index = Math.floor(x.Colors.Gradient.length * Math.random());
  let color = '#d2aaa0';
  return (
    <ProgressBar
      height={12}
      width={Dimensions.get('screen').width - 36}
      progress={0.618}
      active={active}
      colors={[
        tinycolor(color).lighten().toHexString(),
        color,
        tinycolor(color).darken().toHexString(),
      ]}
    />
  );
};
const TestProgressBar = () => {
  return (
    <View style={styles.view}>
      {loadProgressBar(false)}
      <View style={{height: 12}} />
      {loadProgressBar(true)}
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

export default TestProgressBar;
