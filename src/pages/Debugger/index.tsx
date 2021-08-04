import React from 'react';
import {StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native';

const Debugger = () => {
  const debuggers = Array.from({length: 64}, (_, i) => ({
    id: i,
    title: '测试获取地理位置 Android 和 iOS 授权',
    message: '',
    images: 0,
    page: 'GoogleMap',
    time: '2021-07-14',
  }));

  return (
    <View style={{flex: 1}}>
      <View style={styles.viewListContainer}>
        <FlatList
          data={debuggers}
          renderItem={data => (
            <View style={{flexDirection: 'column', display: 'flex'}}>
              <Text style={{fontSize: 16, color: 'black'}}>
                {data.item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item: any, index) => `${item.id}: index`}
          refreshing={false}
          onRefresh={() => {}}
        />
      </View>
      <View style={{height: 24, width: 200, backgroundColor: '#d8d8d8'}}></View>
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

export default Debugger;
