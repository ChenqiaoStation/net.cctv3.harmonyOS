import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import List from './List';

const StaggeredListView = () => {
  const colums = 3;
  // 每一列的 ref
  type ListHandlers = React.ElementRef<typeof List>;
  const views = Array.from({length: colums}, (_, i) =>
    React.useRef<ListHandlers>(),
  );
  const [index, setIndex] = useState(0);
  // 每一列的 Page 的高度
  const [columnsPageLengths, setColumnsPageLengths] = useState(
    Array.from({length: colums}, (_, i) => 0),
  );

  const findMinColumn = () => {
    let min = 0;
    for (let i = 0; i < columnsPageLengths.length; i++) {
      if (columnsPageLengths[i] < columnsPageLengths[min]) {
        min = i;
      }
    }
    return min;
  };

  useEffect(() => {
    console.log('columnsPageLengths', columnsPageLengths.join(' '));
    return () => {};
  }, [columnsPageLengths]);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          views[findMinColumn()].current.push(index);
          setIndex(t => t + 1);
        }}>
        <Text>Press me</Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1}} nestedScrollEnabled={true}>
        <View style={styles.viewColumns}>
          {Array.from({length: 3}, (_, i) => (
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
              ref={ref => (views[i].current = ref)}
              useLayoutChanged={(height) => {
                let _columnsPageLengths = Array.from(columnsPageLengths);
                _columnsPageLengths[i] = height; 
                setColumnsPageLengths(_columnsPageLengths);
              }}
            />
          ))}
        </View>
      </ScrollView>
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

export default StaggeredListView;
