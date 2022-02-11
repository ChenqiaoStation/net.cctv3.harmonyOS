import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import StaggeredListView from '../../react-native-harmonyOS/src/component/StaggeredListView';
import List from '../../react-native-harmonyOS/src/component/StaggeredListView/List';

import souls from '../../datas/soul.json';

const TestStaggeredListView = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let _datas = JSON.parse(JSON.stringify(datas));
    let extra = [];
    for (let i = 0; i < 10; i++) {
      let index = parseInt(`${souls.data.emojiList.length * Math.random()}`);
      let item = souls.data.emojiList[index];
      extra.push({
        id: Math.random(),
        page: `第${pageIndex + 1}页`,
        title: `第 ${i + 1} 个 Item`,
        message: item.keyWordList.join('::'),
        image: item.emojiResourceUrl,
      });
    }
    setDatas(_datas.concat(extra));
    return () => {};
  }, [pageIndex]);

  useEffect(() => {
    console.log(new Date(), datas.length);
    return () => {};
  }, [datas]);

  const size = Dimensions.get('screen').width / 3 - 4;
  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <StaggeredListView
        columns={3}
        header={<Text>Test my staggered list view.</Text>}
        footer={
          <TouchableOpacity
            onPress={() => {
              setPageIndex(t => t + 1);
            }}>
            <Text>Load datas from next page.</Text>
          </TouchableOpacity>
        }
        onLoadComplete={() => {
          Alert.alert(
            `第${pageIndex + 1}页面完成`,
            '请开始您的下一步骚操作。',
            [
              {text: '去你的', onPress: () => {}},
              {
                text: '下一页',
                onPress: () => {
                  setPageIndex(t => t + 1);
                },
              },
            ],
          );
        }}
        renderItem={item => {
          // console.log('Using listView renderItem: ', item);
          return (
            <View style={{padding: 2}}>
              <View style={{backgroundColor: 'white', borderRadius: 4}}>
                <Text style={{fontSize: 16, color: '#333'}}>{item?.title}</Text>
                <Text style={{fontSize: 12, color: '#666'}}>
                  {item?.message}
                </Text>
                <Image
                  source={{uri: item?.image}}
                  style={{height: size, width: size}}
                />
              </View>
            </View>
          );
        }}
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
