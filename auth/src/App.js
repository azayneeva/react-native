import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";

import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAeijwsYCsis_P5QuGlAHL8iwk1TAmiZNI",
      authDomain: "authentication-927e3.firebaseapp.com",
      databaseURL: "https://authentication-927e3.firebaseio.com",
      projectId: "authentication-927e3",
      storageBucket: "authentication-927e3.appspot.com",
      messagingSenderId: "101084320057"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  _renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ marginTop: 5, height: 45 }}>
            <Button
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
              Log out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        <View style={{ flex: 1 }}>{this._renderContent()}</View>
      </View>
    );
  }
}

export default App;
