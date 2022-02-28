import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox} from '../../react-native-harmonyOS';
import {CheckBoxsSkin} from '../../react-native-harmonyOS/src/component/CheckBox';

const TestCheckBox = () => {
  const loadCheckBox = (skin: CheckBoxsSkin, status: boolean) => {
    return (
      <CheckBox onStatusChange={status => {}} status={status} skin={skin} />
    );
  };
  const loadCheckBoxGroups = (skin: CheckBoxsSkin) => {
    return (
      <View style={styles.viewGroup}>
        {loadCheckBox(skin, false)}
        <View style={{width: 4}} />
        {loadCheckBox(skin, true)}
      </View>
    );
  };

  return (
    <View style={styles.view}>
      {loadCheckBoxGroups('onlyTrue')}
      {loadCheckBoxGroups('circleBorder')}
      {loadCheckBoxGroups('circleFill')}
      {loadCheckBoxGroups('squareBorder')}
      {loadCheckBoxGroups('squareFill')}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});

export default TestCheckBox;
