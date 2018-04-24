import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };
  onButtonPress = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error: "Authentication failed!" });
        console.log(error);

        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(email, password)
        //   .catch(() => {
        //     this.setState({ error: "Authentication failed!" });
        //   });
      });
  };

  _handleEmailChange = email => {
    const { error } = this.state;
    this.setState({
      email,
      error: error && ""
    });
  };

  _handlePasswordChange = password => {
    const { error } = this.state;
    this.setState({
      password,
      error: error && ""
    });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label="Email"
            //onFocus={this._handleOnFocus}
            placeholder="user@gmail.com"
            onChangeText={this._handleEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            label="Password"
            onFocus={this._handleOnFocus}
            placeholder="password"
            secureTextEntry
            onChangeText={this._handlePasswordChange}
          />
        </CardSection>

        {this.state.error && (
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        )}

        <CardSection>
          <Button onPress={this.onButtonPress}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
