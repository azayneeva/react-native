import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDAHXL5bJf2Uz8r96SZPqjfDpcH4SLKJaY",
      authDomain: "manager-c2517.firebaseapp.com",
      databaseURL: "https://manager-c2517.firebaseio.com",
      projectId: "manager-c2517",
      storageBucket: "",
      messagingSenderId: "985648430952"
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
