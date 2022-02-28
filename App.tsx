/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';

import {useState} from 'react';
import Debugger from './src/pages/Debugger';
import TabBar from './src/react-native-harmonyOS/src/component/TabBar';
import Harmony from './src/pages/Harmony';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import Setting from './src/pages/Setting';
import {TabNavigator} from './src/react-native-harmonyOS';
import x from 'react-native-x-utils';

const App = () => {
  const tabs = [
    {
      icon: require('./src/images/menu_radish.png'),
      text: 'Harmony Components',
      page: <Harmony />,
    },
    {
      icon: require('./src/images/menu_meituan.png'),
      text: 'Debugger',
      page: <Debugger />,
    },
    {
      icon: require('./src/images/menu_vip.png'),
      text: 'Setting',
      page: <Setting />,
    },
  ];
  const [tab, setTab] = useState(tabs[0]);

  const loadTabs = () => {
    let array = [];
    for (let i = 0; i < tabs.length; i++) {
      let t = tabs[i];
      array.push({
        activeIcon: <Image source={t.icon} style={styles.icon} />,
        inactiveIcon: (
          <Grayscale>
            <Image source={t.icon} style={styles.icon} />
          </Grayscale>
        ),
        text: t.text,
        page: t.page,
      });
    }
    return array;
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <TabBar
        title={tab.text}
        textStyle={{color: 'white'}}
        isHaveBackButton={false}
        onBackButtonPress={() => {}}
        backgroundColors={[x.ui.useRandomColor()]}
      />
      <View style={styles.viewContainer}>{tab.page}</View>
      <TabNavigator
        tabs={loadTabs()}
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
  icon: {
    height: 32,
    width: 32,
  },
});

export default App;
