import React, { Component } from "react";
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
