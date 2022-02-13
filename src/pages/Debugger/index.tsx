import moment from 'moment';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Animated,
  Dimensions,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, ProgressBar} from '../../react-native-harmonyOS';
import tinycolor from 'tinycolor2';
import DeviceInfo from 'react-native-device-info';
import JJ from './JJ';
import TestStaggeredListView from '../Demo/TestStaggeredList';

const nativeAppCenters = [
  {regexp: /.*(mi).*/i, url: 'mimarket://details?id=com.mis'},
  {regexp: /.*(oppo).*/i, url: 'oppomarket://details?packagename=com.mis'},
  {regexp: /.*(huawei|honor).*/i, url: 'appmarket://details?id=com.mis'},
];

const Debugger = () => {
  // 缩放动画
  const fadeEffect = useRef(new Animated.Value(0)).current;
  // 位移动画
  const xyEffect = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  // const [width, setWidth] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    Animated.timing(fadeEffect, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    return () => {};
  }, []);

  useEffect(() => {
    // You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one
    // 注意你不能同时定义 bounciness/speed、tension/friction 或 stiffness/damping/mass 这三组数据，只能指定其中一组
    Animated.timing(xyEffect, {
      toValue: {x: 100, y: 0},
      useNativeDriver: true,
    }).start();
    xyEffect.addListener(size => {
      // setWidth(size.x);
    });
    return () => {};
  });

  useEffect(() => {
    const daysRate = [];
  }, []);

  let color = '#d2aaa0';
  return (
    <View style={{flex: 1}}>
      {/* <Animated.View style={[styles.box, {opacity: fadeEffect}]} />
        <View style={{height: 12}} />
        <Animated.View
          style={[
            styles.box,
            // {width: width},
            {transform: xyEffect.getTranslateTransform()},
          ]}
        /> */}
      <TestStaggeredListView />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 64,
    width: 64,
    backgroundColor: 'green',
  },
});

export default Debugger;
