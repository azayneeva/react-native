import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Card, CardSection, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this._onLoginSuccess)
      .catch(err => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this._onLoginSuccess)
          .catch(this._onLoginFail);
      });
  };

  _onLoginFail = () => {
    this.setState({ error: "Authentication failed!", loading: false });
  };
  _onLoginSuccess = () => {
    this.setState({ email: "", password: "", error: "", loading: false });
  };

  _renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Log in</Button>;
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

        <CardSection>{this._renderButton()}</CardSection>
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
