import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RadioButton} from '../../test';

const TestRadioButton = () => {
  return (
    <View style={styles.view}>
      <RadioButton status={false} onStatusChange={status => {}} />
      <View style={{width: 12}} />
      <RadioButton
        status={true}
        onStatusChange={status => {}}
        skin="centerEmpty"
      />
      <View style={{width: 12}} />
      <RadioButton
        status={true}
        onStatusChange={status => {}}
        skin="centerHalf"
      />
      <View style={{width: 12}} />
      <RadioButton
        status={true}
        onStatusChange={status => {}}
        skin="centerFill"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
});

export default TestRadioButton;
