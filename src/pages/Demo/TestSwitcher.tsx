import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switcher } from '../../react-native-harmonyOS';

const TestSwitcher = () => {
  return (
    <View style={styles.viewContainer}>
      <Switcher
        status={false}
        onStatusChange={status => {}}
        activeColor="#8dc642"
      />
      <View style={{width: 16}} />
      <Switcher
        status={true}
        onStatusChange={status => {}}
        activeColor="#8dc642"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});

export default TestSwitcher;
