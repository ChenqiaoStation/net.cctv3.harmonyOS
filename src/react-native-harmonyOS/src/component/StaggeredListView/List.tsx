import React, { useEffect, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import Item from './Item';

interface ListProps {
  id: number | string;
  useLayoutChanged: (height: number) => void;
  renderItem: (item: any) => React.ReactNode | View | React.FC;
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
  const mansory =
    'https://net-cctv3.oss-cn-qingdao.aliyuncs.com/net.cctv3.temporary/masonry';
  const [itemsMap, setItemsMap] = useState<ItemWidthHieght>(
    Object.create(null),
  );

  useImperativeHandle(ref, () => ({
    push: item => {
      setDatas(_datas => {
        return [..._datas, item];
      });
      console.log(`第${props.id}列准备更新: `, datas.length);
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
    <View style={{flex: 1}}>
      {Array.from(datas, (_, i) => (
        <Item
          key={i}
          onMeasuredHeight={height => {
            let newItems = JSON.parse(JSON.stringify(itemsMap));
            newItems[i] = height;
            setItemsMap(newItems);
          }}>
          {props.renderItem(_)}
        </Item>
      ))}
    </View>
  );
};

export default React.forwardRef(List);
