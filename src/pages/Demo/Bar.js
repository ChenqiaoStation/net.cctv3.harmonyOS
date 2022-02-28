import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tinycolor from 'tinycolor2';

const ProgressBar = () => {
  let color = '#d2aaa0';
  const animate = useRef(new Animated.Value(0)).current;
  const progressBarWidth = animate.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', `100%`],
  });
  useEffect(() => {
    Animated.spring(animate, {
      tension: 1,
      toValue: 100,
      useNativeDriver: false,
    }).start();
    animate.addListener(size => {
      console.log(size);
    });
    return () => {};
  }, []);

  return (
    <View style={{width: 150}}>
      <Animated.View
        style={[
          styles.bar,
          {
            backgroundColor: 'green',
            width: progressBarWidth,
          },
        ]}>
        <LinearGradient
          style={[
            styles.bar,
            {
              backgroundColor: 'green',
              width: `100%`,
            },
          ]}
          colors={[
            tinycolor(color).lighten().toHexString(),
            color,
            tinycolor(color).darken().toHexString(),
          ]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: 200,
    height: 8,
    borderRadius: 4,
  },
});

export default ProgressBar;
