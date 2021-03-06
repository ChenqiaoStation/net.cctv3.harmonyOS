import React, { useEffect } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import codePush from 'react-native-code-push';
import DeviceInfo from 'react-native-device-info';
import x from 'react-native-x-utils';
import { name as appName } from './app.json';
import Stacks from './Stacks';

const HarmonyOS = props => {
  const statuses = [
    'UP_TO_DATE',
    'UPDATE_INSTALLED',
    'UNKNOWN_ERROR',
    'SYNC_IN_PROGRESS',
    'CHECKING_FOR_UPDATE',
    'AWAITING_USER_ACTION',
    'DOWNLOADING_PACKAGE',
    'INSTALLING_UPDATE',
  ];
  useEffect(() => {
    // codePush.sync(options: Object, syncStatusChangeCallback: function(syncStatus: Number), downloadProgressCallback: function(progress: DownloadProgress), handleBinaryVersionMismatchCallback: function(update: RemotePackage)): Promise<Number>;
    //  Xiaomi
    console.log('Device name: ', DeviceInfo.getBrand());
    /*
    !__DEV__ &&
      codePush.getUpdateMetadata().then(localPackage => {
        console.log('Local JS Bundle: ', localPackage);
      });
    codePush
      .checkForUpdate('0DUSidwp05PZNO1EBNi3Vl5BgPv0ojK2hNHa1')
      .then(remotePackage => {
        console.log('Remote JS Bundle: ', remotePackage);
        if (remotePackage == null) {
          // 没有更新
        } else {
          Alert.alert('新版本', remotePackage.description, [
            {text: '奴才还不退下 ？！', onPress: () => {}},
            {
              text: '寡人要尝尝鲜',
              onPress: () => {
                codePush.sync(
                  {
                    updateDialog: false,
                    installMode: codePush.InstallMode.IMMEDIATE,
                  },
                  asyncStatusChanged => {
                    console.log('Sync Status: ', statuses[asyncStatusChanged]);
                  },
                  downloadProgress => {
                    console.log('Sync downloadProgress: ', downloadProgress);
                  },
                  handleBundle => {
                    console.log('Sync handleBundle:', handleBundle);
                  },
                );
              },
            },
          ]);
        }
      });
      */
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.viewContainer}>
        <Stacks />
      </View>
      <View style={styles.viewBottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBottomSpace: {
    height: x.ui.useHomeIndicatorHeight(),
    backgroundColor: 'white',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

// 检测的频率
AppRegistry.registerComponent(appName, () =>
  codePush({checkFrequency: codePush.CheckFrequency.MANUAL})(HarmonyOS),
);
