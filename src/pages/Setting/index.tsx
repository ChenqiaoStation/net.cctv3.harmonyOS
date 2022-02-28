import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Setting = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(
      Array.from({length: 10}, (_, i) => ({
        index: i,
        time: Math.ceil(Math.random() * 20) + 10,
        color:
          '#' +
          parseInt(Math.random().toString().replace('0.', ''))
            .toString(16)
            .substring(0, 6),
      })),
    );
    return () => {};
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Select Address</Text>
      </TouchableOpacity>
      <FlatList
        data={datas}
        renderItem={info => (
          <Item
            index={info.item.index}
            time={info.item.time}
            color={info.item.color}
          />
        )}
        keyExtractor={(item, index) => item.index + ':' + index}
      />
    </View>
  );
};

interface ItemProps {
  index: number;
  time: number;
  color: string;
}

const Item: React.FC<ItemProps> = props => {
  const [s, setS] = useState(0);
  let timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setS(t => t + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (s == props.time) {
      clearInterval(timer.current);
    }
    return () => {};
  }, [s]);

  const fillZero = (n: number) => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  const format = (s: number) => {
    return fillZero(parseInt(`${s / 60}`)) + ':' + fillZero(s % 60);
  };

  return (
    <View
      style={{
        height: props.time * 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: props.time == s ? '#666666' : props.color,
        margin: 4,
      }}>
      <Text style={{fontSize: 16, color: 'white'}}>{`${s}/${props.time} --> ${
        props.time == s ? 'Timer has been cleared' : format(props.time - s)
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
  },
  box: {
    height: 64,
    width: 64,
    backgroundColor: 'green',
  },
});

export default Setting;
