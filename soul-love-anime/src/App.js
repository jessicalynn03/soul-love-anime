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
    if (choice === "Home Page") {
      this.setState({userChoice: <Anime />})
    }
    else if (choice === "Blog Page"){
      this.setState({userChoice: <Post />})
    }
  }
  render() {

    return (
      <div className="App">
        <h1>SOUL-LOVE ANIME</h1>
        <div>

          <div onClick={ () => {this.picChoice("Home Page")}}>Home Page</div>
      <hr>
      </hr>
          <div  onClick={() => {this.picChoice("Blog Page")}}>Blog Page</div>

        </div>
        <form>

        </form>
        
          {this.state.userChoice}
      
      </div>
    );
  }
}
.
export default App;
