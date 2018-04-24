import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAeijwsYCsis_P5QuGlAHL8iwk1TAmiZNI",
      authDomain: "authentication-927e3.firebaseapp.com",
      databaseURL: "https://authentication-927e3.firebaseio.com",
      projectId: "authentication-927e3",
      storageBucket: "authentication-927e3.appspot.com",
      messagingSenderId: "101084320057"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
