import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import List from './List';

interface StaggeredListViewProps {
  columns: number;
  datas: any[];
  renderItem: (item: any) => React.ReactNode | View | React.FC;
}

const StaggeredListView: React.FC<StaggeredListViewProps> = props => {
  // 每一列的 ref
  type ListHandlers = React.ElementRef<typeof List>;
  const views = Array.from({length: props.columns}, (_, i) =>
    React.useRef<ListHandlers>(),
  );
  const [index, setIndex] = useState(0);
  // 每一列的 Page 的高度
  const [columnsPageLengths, setColumnsPageLengths] = useState(
    Array.from({length: props.columns}, (_, i) => 0),
  );

  /**
   * 最小高度的下标
   * @returns
   */
  const findMinColumn = () => {
    let min = Math.min(...columnsPageLengths);
    return columnsPageLengths.findIndex(it => it == min);
  };

  useEffect(() => {
    console.log(
      '🐞 ~ file: index.tsx ~ line 48 ~ useEffect ~ columnsPageLengths',
      columnsPageLengths,
    );
    setIndex(t => t + 1);
    return () => {};
  }, [columnsPageLengths]);

  useEffect(() => {
    console.log('index: ', index);
    index < props.datas.length &&
      views[findMinColumn()].current.push(props.datas[index]);
    return () => {};
  }, [index]);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
              id={i + 1}
              renderItem={item => props.renderItem(item)}
              ref={ref => (views[i].current = ref)}
              useLayoutChanged={height => {
                let _columnsPageLengths = Array.from(columnsPageLengths);
                _columnsPageLengths[i] = Math.ceil(height);
                setColumnsPageLengths(_columnsPageLengths);
              }}
            />
            //<View>{Array.from({length: 100}, (_, j) => <Text>{j}</Text>)}</View>
          ))}
        </View>
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
