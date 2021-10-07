import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Button 
        title="Go to Register"
        onPress={
                ()=> this.props.navigation.navigate('Register')
        }
        />
        <Button 
        title="Login"
        onPress={
                ()=> this.props.navigation.navigate('Login')
        }
        />
    </View>
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
