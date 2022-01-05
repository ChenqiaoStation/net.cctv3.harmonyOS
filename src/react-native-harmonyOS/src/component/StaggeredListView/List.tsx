import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Item from './Item';

interface ListProps {
  useLayoutChanged: (height: number) => void;
}

type ListHandlers = {
  push: (item: any) => void;
  // height: () => number;
};

type ItemWidthHieght = {
  id: any;
  height: number;
};

const List: React.ForwardRefRenderFunction<ListHandlers, ListProps> = (
  props,
  ref,
) => {
  const [datas, setDatas] = useState([]);
  const view = useRef<ScrollView>();
  const mansory =
    'https://net-cctv3.oss-cn-qingdao.aliyuncs.com/net.cctv3.temporary/masonry';
  const [itemsMap, setItemsMap] = useState<ItemWidthHieght>(
    Object.create(null),
  );

  useImperativeHandle(ref, () => ({
    push: item => {
      datas.push(`${mansory}/${item}.jpg`);
      setDatas(datas);
    },
    // height: () => {
    //   let height = 0;
    //   view.current.measure((x, y, width, height) => {
    //     height = height;
    //   });
    //   return height;
    // },
  }));

  useEffect(() => {
    let keys = Object.keys(itemsMap);
    if (keys.length == datas.length) {
      let sum = 0;
      keys.map(it => {
        sum += itemsMap[it];
      });
      props.useLayoutChanged(sum);
    }
    return () => {};
  }, [itemsMap]);

  return (
    <ScrollView
      style={{flexDirection: 'column'}}
      contentContainerStyle={{flexGrow: 1}}
      ref={view}>
      {Array.from(datas, (_, i) => (
        <Item
          key={i}
          onMeasuredHeight={height => {
            let newItems = Object.assign({}, itemsMap);
            newItems[i] = height;
            setItemsMap(newItems);
          }}>
          <AutoHeightImage
            width={Dimensions.get('screen').width / 3}
            source={{uri: _}}
          />
        </Item>
      ))}
    </ScrollView>
  );
};

export default React.forwardRef(List);
