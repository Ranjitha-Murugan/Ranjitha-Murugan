import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';

export default class Login extends React.Component {
  state={
    email:"",
    password:"",
    loading: false
  }
doLogin(){
  let data = JSON.stringify({
    username: this.state.email,
    password: this.state.password
  });
  
  axios.post('https://sms-core-backend-example.herokuapp.com/api/v1/login', data) .then(
    {
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "proxy": "https://sms-core-backend-example.herokuapp.com/api/v1"
            }},(response) => {
             this.setState({
          loading: false,
        });
                
      if (response.status === 200) {
         Alert.alert("Logined successful", response.message);
        //  return <Redirect to = {{ pathname: "/Home" }} />;
      } else {
        alert('An error occurred. Please try again later.');
      }

    },

    (err) => {
      this.setState({
        loading: false,
      });

      Alert.alert('Could not establish connection',err.message);
    },

  );
} 
  render(){
    if (this.state.doLogin) {
      return <Redirect to = {{ pathname: "/Home" }} />;
    }
    return (
      <View style={styles.container}>
        {/* <Text Hstyle={styles.logo}>Login here..</Text> */}
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.doLogin()} style={styles.loginBtn}
        onPress={() => this.doLogin()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:'grey',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});