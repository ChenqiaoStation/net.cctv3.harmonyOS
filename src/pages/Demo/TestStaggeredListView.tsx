import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StaggeredListView from '../../react-native-harmonyOS/src/component/StaggeredListView';
import List from '../../react-native-harmonyOS/src/component/StaggeredListView/List';

const TestStaggeredListView = () => {
  return (
    <View style={{flex: 1}}>
      <StaggeredListView />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  viewColumns: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default TestStaggeredListView;
