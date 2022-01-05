import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

const JJ = () => {
  // 分批出货
  const fenpichuhuo = () => {};

  // 最后出货
  const zuihouchu = () => {};

  useEffect(() => {
    const dailyRates = [];
    const initialMoney = 10000;
  }, []);

  return <View />;
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

export default JJ;
