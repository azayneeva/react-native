import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";
import { Button } from "../common";
import firebase from "firebase";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log("Component will mount in album list");
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => {
        this.setState({ albums: res.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      </ScrollView>
    );
  }
}

export default AlbumList;
