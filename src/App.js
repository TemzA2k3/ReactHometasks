import React, { Component } from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            inputId: ""
        }
    }

  handleDataChange = (inputValue, inputId) => {
    this.setState({ inputValue, inputId});
  };


  render() {
    return (
      <div className="App">
          <HeaderComponent mealsCount={this.state}/>
          <Description onButtonClick={this.handleDataChange}/>
          <Footer />
      </div>
    );
  }
}

export default App;
