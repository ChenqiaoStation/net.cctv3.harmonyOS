import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface AddressSelectorProps {}
/**
 *
 * @param props
 * @returns
 */
const AddressSelector: React.FC<AddressSelectorProps> = props => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {

    return () => {};
  }, []);

  return <View style={{flex: 1}}></View>;
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
