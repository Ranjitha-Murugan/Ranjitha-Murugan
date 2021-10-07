import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({

    Home: {
      screen: Home
    },
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    }
    
  },
  {
    initialRouteName: 'Home'
  }

);

export class App extends React.Component {
  render(){
  return (
    <RootStack/>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const AppCont = createAppContainer(RootStack);

export default AppCont;

//var cors = require('cors')
//App.use(cors())