import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import datas from './assets/data';
import List from './List';
import Tabs from './Tabs';
import {AddressItem} from './types';

export interface AddressSelectorProps {
  show: boolean;
  onHide: () => void;
  theme?: string;
}

const AddressSelector: React.FC<AddressSelectorProps> = props => {
  const [show, setShow] = useState(false);
  const [listDatas, setListDatas] = useState<AddressItem[]>([]);
  const theme = props?.theme || '#e74b44';
  const [address, setAddress] = useState<AddressItem>(Object.create(null));
  
  useEffect(() => {
    if (props.show != show) {
      setShow(props.show);
    }
    return () => {};
  }, [props.show]);

  useEffect(() => {
    setListDatas(
      Array.from(datas, (_, i) => ({
        code: _.code,
        name: _.name,
        children: _.children,
      })),
    )
    return () => {};
  }, []);

  return (
    <Modal
      isVisible={show}
      onDismiss={() => {}}
      animationIn={'slideInUp'}
      animationOutTiming={1000}
      statusBarTranslucent={true}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.onHide();
      }}
      onBackdropPress={() => {
        props.onHide();
      }}
      style={styles.viewModal}>
      <View
        style={{
          padding: 16,
          height: Dimensions.get('screen').height / 3,
          backgroundColor: 'white',
        }}>
        <Tabs
          theme={theme}
          address={[]}
          onItemPress={item => {
            console.log(
              '🐞 ~ file: AddressSelector.tsx ~ line 57 ~ item',
              item,
            );
          }}
        />
        <View style={{height: 8}} />
        <View style={styles.viewListContainer}>
          <List theme={theme} listDatas={listDatas} onItemPress={item => {}} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'space-between',
    flexDirection: 'column-reverse',
  },
  viewButton: {
    height: 44,
    width: Dimensions.get('screen').width - 32,
    backgroundColor: '#987123',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
  },
  viewListContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  viewButtonContainer: {
    position: 'absolute',
    top: 0,
  },
});

export default AddressSelector;
