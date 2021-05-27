import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ScanScreen from "./screens/scanScreen"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component{
  render(){
  return (
    <AppContainer />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'  
  },
});

const TabNavigator = createBottomTabNavigator({
  ScanScreen:{screens:ScanScreen}
})

const AppContainer = createAppContainer(TabNavigator)