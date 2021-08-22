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
import {Button, ProgressBar} from '../../test';
import tinycolor from 'tinycolor2';
import DeviceInfo from 'react-native-device-info';

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

  let color = '#d2aaa0';
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.viewContainer}>
        <Text>{new Date().toString()}</Text>
        <Text>Hello world 1. 测试 1.0 版本</Text>
        <Animated.View style={[styles.box, {opacity: fadeEffect}]} />
        <View style={{height: 12}} />
        <Animated.View
          style={[
            styles.box,
            // {width: width},
            {transform: xyEffect.getTranslateTransform()},
          ]}
        />
        <View style={{height: 12}} />
        <ProgressBar
          height={12}
          width={Dimensions.get('screen').width - 36}
          progress={progress}
          colors={[
            tinycolor(color).lighten().toHexString(),
            color,
            tinycolor(color).darken().toHexString(),
          ]}
        />
      </View>
      <View style={{height: 12}} />
      <Button
        style={{height: 44, width: Dimensions.get('screen').width - 36}}
        skin="2d"
        text={`Change Progress: ${Math.ceil(progress * 100)}%`}
        disabled={false}
        onPress={() => {
          // Linking.openURL('appmarket://details?id=com.mis');
          let appCenter = nativeAppCenters.find(it =>
            it.regexp.test(DeviceInfo.getBrand()),
          );
          Linking.openURL(appCenter?.url ?? '');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
  },
  box: {
    height: 64,
    width: 64,
    backgroundColor: 'green',
  },
});

export default Debugger;
