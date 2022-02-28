import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ViewProps,
} from 'react-native';

const TestColors = () => {
  return (
    <View style={styles.viewAll}>
      {/* <View style={styles.viewItems}>
        {Array.from(x.Colors.Color, (_, i) => {
          let item = x.Colors.Color[i];
          return (
            <View
              key={i}
              style={[styles.viewItem, {backgroundColor: item.dark}]}
            />
          );
        })}
      </View>
      <View style={{height: 12}} />
      <View style={styles.viewTags}>
        {Array.from(x.Colors.Color, (_, i) => {
          let item = x.Colors.Color[i];
          return (
            <View key={i} style={styles.viewTagContainer}>
              <View style={[styles.viewTag, {backgroundColor: item.light}]}>
                <Text style={[styles.textTag, {color: item.dark}]}>
                  {item.value}
                </Text>
              </View>
            </View>
          );
        })}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    flexDirection: 'column',
    display: 'flex',
  },
  viewItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    display: 'flex',
  },
  viewItem: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  viewTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
  },
  viewTagContainer: {
    width: (Dimensions.get('screen').width - 48) / 6,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginVertical: 4,
  },
  viewTag: {
    height: 24,
    width: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  textTag: {
    fontSize: 14,
  },
});

export default TestColors;
