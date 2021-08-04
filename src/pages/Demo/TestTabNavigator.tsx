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

const TestTabNavigator = () => {
  return (
    <View style={styles.viewAll}>
      <TabNavigator
        tabs={[
          {
            image: require('../../images/demo_red_package.png'),
            text: '红包',
            page: <View />,
          },
          {
            image: require('../../images/demo_wifi.png'),
            text: '蹭网',
            page: <View />,
          },
          {
            image: require('../../images/demo_car.png'),
            text: '物流',
            page: <View />,
          },
          {
            image: require('../../images/demo_manager.png'),
            text: '管理',
            page: <View />,
          },
        ]}
        onTabPress={() => {}}
      />
      <View style={{height: 12}} />
      <TabNavigator
        tabs={[
          {
            image: require('../../images/demo_menu_home_no.png'),
            activeImage: require('../../images/demo_menu_home_yes.png'),
            text: '首页',
            page: <View />,
          },
          {
            image: require('../../images/demo_menu_game_no.png'),
            activeImage: require('../../images/demo_menu_game_yes.png'),
            text: '游戏',
            page: <View />,
          },
          {
            image: require('../../images/demo_menu_drink_no.png'),
            activeImage: require('../../images/demo_menu_drink_yes.png'),
            text: '喝茶',
            page: <View />,
          },
          {
            image: require('../../images/demo_menu_money_no.png'),
            activeImage: require('../../images/demo_menu_money_yes.png'),
            text: '福利',
            page: <View />,
          },
        ]}
        onTabPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    flexDirection: 'column',
    display: 'flex',
  },
});

export default TestTabNavigator;
