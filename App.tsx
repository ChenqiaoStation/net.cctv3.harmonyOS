/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {Button, TabNavigator, x, Closure} from './src/test';
import {useState} from 'react';
import Debugger from './src/pages/Debugger';
import TabBar from './src/test/src/component/TabBar';
import Harmony from './src/pages/Harmony';

let colors =
  x.Colors.Gradient[
    parseInt((Math.random() * x.Colors.Gradient.length).toString())
  ];

const App = () => {
  const tabs = [
    {
      image: require('./src/images/menu_harmony_no.png'),
      activeImage: require('./src/images/menu_harmony_yes.png'),
      text: 'Harmony Components',
      page: <Harmony />,
    },
    {
      image: require('./src/images/menu_bug_no.png'),
      activeImage: require('./src/images/menu_bug_yes.png'),
      text: 'Debugger',
      page: <Debugger />,
    },
    {
      image: require('./src/images/menu_setting_no.png'),
      activeImage: require('./src/images/menu_setting_yes.png'),
      text: 'Setting',
      page: <View />,
    },
  ];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <TabBar
        title={tab.text}
        textStyle={{color: 'white'}}
        isHaveBackButton={false}
        onBackButtonPress={() => {}}
        backgroundColors={[colors.start, colors.end]}
      />
      <View style={styles.viewContainer}>{tab.page}</View>
      <TabNavigator
        tabs={tabs}
        inactiveColor="black"
        imageStyle={styles.tabImageStyle}
        onTabPress={tab => {
          setTab(tab);
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
  tabImageStyle: {
    height: 30,
    width: 30,
  },
});

export default App;
