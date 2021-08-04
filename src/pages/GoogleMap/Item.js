import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Item = props => {
  let item = props.item;
  return (
    <TouchableOpacity
      style={styles.viewAll}
      onPress={() => {
        props.onItemPress();
      }}>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textMesssage}>{item.message}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewAll: {
    flexDirection: 'column',
    display: 'flex',
    padding: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    marginVertical: 12,
  },
  textTitle: {
    fontSize: 18,
    color: 'black',
  },
  textMesssage: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Item;
