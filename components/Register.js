import React, {Component} from 'react';
import { View, Text,TouchableOpacity,Alert,StyleSheet,TextInput} from 'react-native';
import axios from 'axios';

class Register extends Component {
 
constructor(props){
super(props);
this.state = {
  firstName:'',
  lastName:'',
  email: '',
  userName:'',
  password: '',
  mobile:'',
  gender:'',
  dateOfBirth:'',
  loading: false
}
}

 onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    });
  }

    doRegister() {
      const {firstName,lastName,email,userName,password,mobile,gender,dateOfBirth} = this.state;
          if (firstName&&lastName&&email&&userName&&password&&mobile&&gender&&dateOfBirth) {

            const req = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              userName:userName,
              password: password,
              mobile:mobile,
              gender:gender,
              dateOfBirth:dateOfBirth
            };

            this.setState({
              loading: true,
            });

            axios.post('https://sms-core-backend-example.herokuapp.com/api/v1/register', req)
             .then(
              {
                headers: {
                  "Access-Control-Allow-Origin" : "*",
                  "Content-type": "Application/json",
                  "proxy": "https://sms-core-backend-example.herokuapp.com/api/v1"
                            }},
              (response) => {
                this.setState({
                  loading: false,
                });

                if (response.status === 200) {
                   Alert.alert("Registration successful", response.message);
                   
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

          } else {
            alert('Please complete registration');
          }
        }
        


 render(){
 const {firstName,lastName,email,userName,password,mobile,gender,dateOfBirth,loading} = this.state;
return(
<View>                     
 <TextInput style={styles.input}
  placeholder="First Name"
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('firstName', value)} />
 
 <TextInput style={styles.input}
  placeholder="Last Name"
  secureTextEntry={this.state.hidePassword}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('lastName',   value)} />

<TextInput style={styles.input}
  placeholder="Email"
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('email', value)} />
 
 <TextInput style={styles.input}
  placeholder="User Name"
  secureTextEntry={this.state.hidePassword}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('userName',   value)} />

<TextInput style={styles.input}
  placeholder="Password"
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('password', value)} />
 
 <TextInput style={styles.input}
  placeholder="Mobile Number"
  secureTextEntry={this.state.hidePassword}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('mobile',   value)} />

<TextInput style={styles.input}
  placeholder="Gender"
  secureTextEntry={this.state.hidePassword}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('gender',   value)} />
 
 <TextInput style={styles.input}
  placeholder="Date of Birth"
  secureTextEntry={this.state.hidePassword}
  autoCapitalize="none"
  autoCorrect={false}
  returnKeyType="next"
  onChangeText={(value) => this.onChangeHandle('dateOfBirth',   value)} />

 <TouchableOpacity 
  style={{
  ...styles.btn,
  backgroundColor: loading ? '#ddd' : '#A40606',
  }}
  onPress={() => this.doRegister()} >

 <Text style={styles.loginText}> 
 {loading ? 'Loading ...' : 'Register'}
 </Text>
 </TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
      input:{
        borderColor: 'grey',
        borderWidth: 20,
        //width:'50%',
        height: 70,
        fontSize: 18
      },

      btn: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      marginTop: 20,
      borderRadius: 25,
      backgroundColor: '#A40606',
    },
   loginText: {
      color: '#333',
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
});

export default Register;