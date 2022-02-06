import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AddressItem} from './types';

export interface TabsProps {
  address: AddressItem[];
  theme: string;
  onItemPress: (address: AddressItem) => void;
}

const Tabs: React.FC<TabsProps> = props => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.views}>
      {Array.from(props.address, (_, i) => (
        <TouchableOpacity
          key={i}
          style={styles.viewItem}
          onPress={() => {
            setIndex(i);
            props.onItemPress(_);
          }}>
          <Text
            style={[
              styles.textAddress,
              {color: i == index ? props.theme : '#666'},
            ]}>
            {_.name}
          </Text>
          <View style={{height: 8}} />
          <View
            style={[
              styles.viewLine,
              {backgroundColor: i == index ? props.theme : 'white'},
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewLine: {
    height: 4,
    width: '100%',
    borderRadius: 2,
  },
  textAddress: {
    fontSize: 16,
  },
});

export default Tabs;
