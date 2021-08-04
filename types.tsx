import React from 'react';
import {View} from 'react-native';
export interface HarmonyView {
  title: string;
  message: string;
  view: React.Component | React.FC | View | any;
}
