import React from 'react';
import {StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native';

import {useState} from 'react';
import Item from './Item';
import {Closure} from '../../test';

const GoogleMap = props => {
  const debuggers = [
    {
      id: 1,
      title: '测试获取地理位置 Android 和 iOS 授权',
      message: '',
      images: 0,
      page: 'GoogleMap',
      time: '2021-07-14',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewListContainer}>
        <FlatList
          data={debuggers}
          renderItem={data => (
            <Item
              item={data.item}
              onItemPress={item => {
                props.navigation.navigate(item.page);
              }}
            />
          )}
          keyExtractor={(item, index) => `${item.id}: index`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  viewListContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
  },
});

export default GoogleMap;
