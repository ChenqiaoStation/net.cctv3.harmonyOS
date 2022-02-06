import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AddressItem} from './types';

export interface ListProps {
  listDatas: AddressItem[];
  onItemPress: (item: AddressItem) => void;
  theme: string;
}

const List: React.FC<ListProps> = props => {
  const [selectItem, setSelectItem] = useState<AddressItem>(
    Object.create(null),
  );
  const [datas, setDatas] = useState<AddressItem[]>([]);

  useEffect(() => {
    let _datas = JSON.parse(JSON.stringify(datas));
    for (let i = 0; i < _datas.length; i++) {
      _datas[i].select = selectItem.code == _datas[i].code;
    }
    setDatas(_datas);
    return () => {};
  }, [selectItem]);

  useEffect(() => {
    console.log('props.listDatas: ', props.listDatas);
    if (props.listDatas.length > 0) {
      let _datas = JSON.parse(JSON.stringify(props.listDatas));
      _datas[0].select = true;
      setDatas(_datas);
    }
    return () => {};
  }, [props.listDatas]);

  useEffect(() => {
    // console.log('Current datas: ', datas);
    return () => {};
  }, [datas]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={datas}
        showsVerticalScrollIndicator={false}
        renderItem={info => (
          <ListItem
            theme={props.theme}
            item={info.item}
            onItemPress={item => {
              setSelectItem(item);
              props.onItemPress(item);
            }}
          />
        )}
        keyExtractor={(item, index) => `${item.code}: ${index}`}
      />
    </View>
  );
};

interface ListItemProps {
  item: AddressItem;
  theme: string;
  onItemPress: (item: AddressItem) => void;
}

const ListItem: React.FC<ListItemProps> = props => {
  return (
    <TouchableOpacity
      style={styles.viewItem}
      onPress={() => {
        props.onItemPress(props.item);
      }}>
      <Text
        style={[
          styles.textItem,
          {color: props.item?.select ? props.theme : '#666'},
        ]}>
        {props.item.name}
      </Text>
      <Image
        source={require('./assets/list_item_select.png')}
        style={[
          styles.imageItemSelect,
          {tintColor: props.item?.select ? props.theme : 'white'},
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  textItem: {
    fontSize: 16,
  },
  imageItemSelect: {
    height: 18,
    width: 18,
  },
});

export default List;
