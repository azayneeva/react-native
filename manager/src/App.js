import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
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
    //{} as a second argument in createStore() is for initial state that we want to pass here
    //applyMiddleware(ReduxThunk) is a store enhancer, adds some additional functionality to store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
