import './App.css';
import React, { Component } from 'react';
import Anime from "./components/Anime";
import Post from "./components/Post";

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
        <h1>SOUL-LOVE ANIME</h1>
        <ul>

          <li onClick={ () => {this.picChoice("Home")}}>Home</li>
      
          <li  onClick={() => {this.picChoice("Blog")}}>Blog</li>

          <li  onClick={() => {this.picChoice("Author")}}>Author</li>

          <li  onClick={() => {this.picChoice("Help")}}>Help</li>

        </ul>
        <form>

        </form>
        
          {this.state.userChoice}
      
      </div>
    );
  }
}

export default App;
