import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import List from './List';

/**
 * 源数据或者测量完每一列的高度变更都会导致重新渲染
 * 有可能 columnsHieghts 初始化完了，但是 datas 还没初始化
 * 则 setIndex(...) 前几个，有可能是 undefined
 */
type UniteEffect = {
  datas: any[];
  columnsHeights: number[];
};

/**
 * 全部 items 绘制完成以后，index 回退，便于 props.datas 更改以后，从上次的 index 接着渲染
 */
type IndexEffect = {
  index: number;
  needDraw: boolean;
};

interface StaggeredListViewProps {
  columns: number;
  datas: any[];
  /** Header / footer */
  header?: React.ReactNode | View | React.FC;
  footer?: React.ReactNode | View | React.FC;
  renderItem: (item: any) => React.ReactNode | View | React.FC;
  /** 加载完成 */
  onLoadComplete?: () => void;
  /** 显示纵向滚动条 */
  showsVerticalScrollIndicator?: boolean;
}

const StaggeredListView: React.FC<StaggeredListViewProps> = props => {
  // 每一列的 ref
  type ListHandlers = React.ElementRef<typeof List>;
  const views = Array.from({length: props.columns}, (_, i) =>
    React.useRef<ListHandlers>(),
  );
  // 绘制进度
  const [index, setIndex] = useState<IndexEffect>({index: 0, needDraw: true});
  // datas / columnsHeights 更改后 item 的 Push
  const [uniteEffects, setUniteEffects] = useState<UniteEffect>({
    datas: [],
    columnsHeights: Array.from({length: props.columns}, (_, i) => 0),
  });
  /**
   * 最小高度的下标
   * @returns
   */
  const findMinColumn = () => {
    let min = Math.min(...uniteEffects.columnsHeights);
    return uniteEffects.columnsHeights.findIndex(it => it == min);
  };

  useEffect(() => {
    // views[findMinColumn()].current.push(datas[index]);
    // console.log(`Datas.length: ${props.datas.length}`);
    let _uniteEffects = JSON.parse(JSON.stringify(uniteEffects));
    _uniteEffects.datas = props.datas;
    setUniteEffects(_uniteEffects);
    return () => {};
  }, [props.datas]);

  useEffect(() => {
    // console.log('uniteEffects: ', uniteEffects);
    if (uniteEffects.datas.length > 0) {
      setIndex({index: index.index + 1, needDraw: true});
    }
    return () => {};
  }, [uniteEffects]);

  useEffect(() => {
    // console.log(`ListView 第${index}个 item.`);
    if (index.needDraw) {
      if (index.index >= uniteEffects.datas.length) {
        setIndex({index: index.index - 1, needDraw: false});
        index.index > 0 && props?.onLoadComplete();
      } else {
        views[findMinColumn()].current.push(uniteEffects.datas[index.index]);
      }
    }
    return () => {};
  }, [index]);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={
          props?.showsVerticalScrollIndicator ?? false
        }>
        {props?.header ?? null}
        <View style={styles.viewColumns}>
          {Array.from({length: props.columns}, (_, i) => (
            // <FlatList
            //   key={i}
            //   data={Array.from({length: 100}, (_, i) => i)}
            //   renderItem={item => {
            //     return <Text>{item.item}</Text>;
            //   }}
            //   keyExtractor={(item, index) => `${item}: index`}
            // />
            <List
              key={i}
              id={i}
              renderItem={item => props.renderItem(item)}
              ref={ref => (views[i].current = ref)}
              useLayoutChanged={height => {
                // console.log('useLayoutChanged height: ', height);
                let _uniteEffects = JSON.parse(JSON.stringify(uniteEffects));
                let heights = [..._uniteEffects.columnsHeights];
                heights[i] = Math.ceil(height);
                // console.log('newHeights: ', heights);
                _uniteEffects.columnsHeights = heights;
                setUniteEffects(_uniteEffects);
              }}
            />
            //<View>{Array.from({length: 100}, (_, j) => <Text>{j}</Text>)}</View>
          ))}
        </View>
        {props?.footer ?? null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  viewColumns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StaggeredListView;
