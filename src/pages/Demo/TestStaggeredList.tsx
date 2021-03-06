import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import souls from '../../datas/soul.json';
import { StaggeredList } from '../../react-native-harmonyOS/index';

type ItemT = {
  id: string | number;
  page: string;
  title: string;
  message: string;
  image: string;
};

const TestStaggeredList = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [datas, setDatas] = useState<ItemT[]>([]);

  useEffect(() => {
    if (pageIndex < 2) {
      let _datas = JSON.parse(JSON.stringify(pageIndex == 0 ? [] : datas));
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
    }
    return () => {};
  }, [pageIndex]);

  useEffect(() => {
    console.log(new Date(), datas.length);
    return () => {};
  }, [datas]);

  const size = Dimensions.get('screen').width / 3 - 4;

  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <StaggeredList
        columns={3}
        header={<Text>Test my staggered list view.</Text>}
        onRefresh={() => {
          setPageIndex(0);
        }}
        footer={
          <TouchableOpacity
            onPress={() => {
              setPageIndex(t => t + 1);
            }}>
            <Text>Load datas from next page.</Text>
          </TouchableOpacity>
        }
        onLoadComplete={() => {
          setPageIndex(t => t + 1);
        }}
        renderItem={item => {
          // console.log('Using listView renderItem: ', item);
          item;
          return (
            <View style={{padding: 2}}>
              <View style={{backgroundColor: 'white', borderRadius: 4}}>
                <Text style={{fontSize: 16, color: '#333'}}>{item?.page}</Text>
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
        onMeasure={result => {
          // console.log(result);
        }}
        onScroll={e => {
          // console.log(e.nativeEvent.contentOffset.y);
        }}
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

export default TestStaggeredList;
