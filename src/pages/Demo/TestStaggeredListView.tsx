import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import StaggeredListView from '../../react-native-harmonyOS/src/component/StaggeredListView';
import List from '../../react-native-harmonyOS/src/component/StaggeredListView/List';

import souls from '../../datas/soul.json';

const TestStaggeredListView = () => {
  const datas = Array.from(souls.data.emojiList, (_, i) => ({
    id: i + 1,
    title: `第 ${i} 个 Item`,
    message: _.keyWordList.join('::'),
    image: _.emojiResourceUrl,
  }));

  const size = Dimensions.get('screen').width / 3 - 4;
  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <StaggeredListView
        columns={3}
        renderItem={item => (
          <View style={{padding: 2}}>
            <View style={{backgroundColor: 'white', borderRadius: 4}}>
              <Text style={{fontSize: 16, color: '#333'}}>{item.title}</Text>
              <Text style={{fontSize: 12, color: '#666'}}>{item.message}</Text>
              <Image
                source={{uri: item.image}}
                style={{height: size, width: size}}
              />
            </View>
          </View>
        )}
        datas={datas}
      />
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
