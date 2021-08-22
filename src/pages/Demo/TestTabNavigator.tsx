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
  Image,
} from 'react-native';

import {Button, TabNavigator, x, Closure} from '../../test';
import {useState} from 'react';

const TestTabNavigator = () => {
  let tabs = [
    {
      icon: require('../../images/demo_menu_home.png'),
      text: '首页',
    },
    {
      icon: require('../../images/demo_menu_game.png'),
      text: '游戏',
    },
    {
      icon: require('../../images/demo_menu_drink.png'),
      text: '喝茶',
    },
    {
      icon: require('../../images/demo_menu_money.png'),
      text: '福利',
    },
  ];

  const loadTabs = () => {
    let array = [];
    for (let i = 0; i < tabs.length; i++) {
      array.push({
        activeIcon: <Image source={tabs[i].icon} style={styles.icon} />,
        inactiveIcon: <Image source={tabs[i].icon} style={styles.icon} />,
        text: tabs[i].text,
        page: null,
      });
    }
    return array;
  };

  return (
    <View style={styles.viewAll}>
      <TabNavigator tabs={loadTabs()} onTabPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    flexDirection: 'column',
    display: 'flex',
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default TestTabNavigator;
