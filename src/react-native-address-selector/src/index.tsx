import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {x} from '../../react-native-harmonyOS';

interface AddressSelectorProps {}
/**
 *
 * @param props
 * @returns
 */
const AddressSelector: React.FC<AddressSelectorProps> = props => {
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

export default AddressSelector;
