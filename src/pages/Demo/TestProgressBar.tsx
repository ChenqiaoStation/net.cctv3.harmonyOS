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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, ProgressBar} from '../../test';
import tinycolor from 'tinycolor2';
import {x} from '../../test';

const TestProgressBar = () => {
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
  let index = Math.floor(x.Colors.Gradient.length * Math.random());
  return (
    <View style={styles.viewContainer}>
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
      <View style={{height: 12}} />
      <Button
        style={{height: 44, width: Dimensions.get('screen').width - 36}}
        skin="2d"
        text={`Change Progress: ${Math.ceil(progress * 100)}%`}
        disabled={false}
        onPress={() => {
          setProgress(t => {
            let r = 0;
            do {
              r = Math.random();
            } while (r > 0.25);
            return t + r > 1 ? 0 : t + r;
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
});

export default TestProgressBar;
