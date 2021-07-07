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
  useColorScheme,
  View,
} from 'react-native';

import {Button, TabNavigator, x} from './src/test';
import {useState} from 'react';

const App = () => {
  const tabs = [
    {
      image: require('./src/images/menu_harmony.png'),
      text: 'Harmony',
      page: <View />,
    },
    {
      image: require('./src/images/menu_bug.png'),
      text: 'Debug',
      page: <View />,
    },
    {
      image: require('./src/images/menu_setting.png'),
      text: 'Setting',
      page: <View />,
    },
  ];
  const [page, setPage] = useState(tabs[0].page);
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewContainer}>{page}</View>
      <TabNavigator
        tabs={tabs}
        inactiveColor="black"
        activeColor={x.Colors.Color.find(it => it.name == 'Green').dark}
        onTabPress={tab => {
          setPage(tab.page);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
