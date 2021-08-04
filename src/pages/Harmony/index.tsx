/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import TestColors from '../Demo/TestColors';
import {HarmonyView} from '../../../types';
import TestSwitcher from '../Demo/TestSwitcher';
import TestGradient from '../Demo/TestGradient';
import TestTabNavigator from '../Demo/TestTabNavigator';
import TestButton from '../Demo/TestButton';
import TestCheckBox from '../Demo/TestCheckBox';
import TestRadioButton from '../Demo/TestRadioButton';
import TestSeekBar from '../Demo/TestSeekBar';

const harmonyViews: Array<HarmonyView> = [
  {
    title: 'Colors',
    message: 'Material design 设计规范的配色方案',
    view: <TestColors />,
  },
  {
    title: 'Linear Grident',
    message: 'Color OS 设计规范的颜色渐变方案',
    view: <TestGradient />,
  },
  {
    title: 'Switcher',
    message: 'iOS 风格开关按钮，伴随弹簧般的弹性收缩动画',
    view: <TestSwitcher />,
  },
  {
    title: 'Tab Navigator',
    message: 'react-native-tab-navigator 的替代品',
    view: <TestTabNavigator />,
  },
  {
    title: 'Button',
    message: '2D / 3D 效果的按钮',
    view: <TestButton />,
  },
  {
    title: 'Radio Button',
    message: '单选按钮，常见的样式都有了 -_-||',
    view: <TestRadioButton />,
  },
  {
    title: 'Check Box',
    message: '多选按钮，常见的样式都有了 -_-||',
    view: <TestCheckBox />,
  },
  {title: 'Seek Bar', message: '可拖拽进度条', view: <TestSeekBar />},
];

const Harmony = () => {
  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={harmonyViews}
        renderItem={data => (
          <View style={styles.viewItemAll}>
            <Text style={styles.textItemTitle}>{data.item.title}</Text>
            <View style={{height: 4}} />
            <Text style={styles.textItemMessage}>{data.item.message}</Text>
            <View style={{height: 8}} />
            {data.item.view}
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}: ${index}`}
        ListEmptyComponent={() => <View style={styles.viewItemEmpty} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
  },
  viewItemAll: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginVertical: 6,
    elevation: 2,
    shadowRadius: 8,
  },
  textItemTitle: {
    fontSize: 16,
    color: 'black',
  },
  textItemMessage: {
    fontSize: 14,
    color: 'grey',
  },
  viewItemEmpty: {
    height: 12,
    width: Dimensions.get('screen').width - 24,
  },
});

export default Harmony;
