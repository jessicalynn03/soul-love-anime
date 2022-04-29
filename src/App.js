import './App.css';
import React, { Component } from 'react';
import Anime from "./components/Anime";
import Post from "./components/Post";
import Author from "./components/Author";
import Help from "./components/Help";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoice: "",
    }
  }
  
  picChoice = (choice) => {
    // console.info("I was clicked");
    if (choice === "Home") {
      this.setState({userChoice: <Anime />})
    }
    else if (choice === "Blog"){
      this.setState({userChoice: <Post />})
    }
    else if(choice === "Author"){
      this.setState({userChoice: <Author />})
    }
    else if(choice === "Help"){
      this.setState({userChoice: <Help />})

    }
  }
  render() {

    return (
      <div className="App">
        <ul className="nav-links">

          <li onClick={ () => {this.picChoice("Home")}}>Home</li>
      
          <li  onClick={() => {this.picChoice("Blog")}}>Blog</li>

          <li  onClick={() => {this.picChoice("Author")}}>Author</li>

          <li  onClick={() => {this.picChoice("Help")}}>Help</li>

        </ul>
        <h1>SOUL-LOVE ANIME</h1>
        <p>Welcome to Soul-Love Anime! The number 1 blog website in the NYC-area for anime lovers.This dating website was created for people to connect with their shared love for anime.</p>
        <form>

        </form>
        
          {this.state.userChoice}
      
      </div>
    );
  }
}

export default App;
