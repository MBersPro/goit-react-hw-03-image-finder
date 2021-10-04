import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
    state = {
        name:"",
    };

    onSubmit = (q) => {
        this.setState({ name: q })
        console.log(this.state.name)
    }

  render() {
    return (
      <>
            <Searchbar
                onSubmit={this.onSubmit}
            />
        <ImageGallery />
      </>
    );
  }
}

export default App;
