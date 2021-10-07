import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { getApiData } from "../utils/Api";
import Button from "./button/Button";

class App extends Component {
  state = {
    name: "",
    imgList: [],
    page: 1,
  };

  onSubmit = (q) => {
    if (this.state.name !== q) {
        this.setState({ imgList: [] });
        this.setState({ name: q });
      }
      
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name && this.state.name !== "") {
      getApiData(this.state.name, this.state.page).then((images) =>
        this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
      );
    }

    if (this.state.page !== prevState.page) {
      getApiData(this.state.name, this.state.page).then((images) =>
        this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
      );
    }
  }

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imgList={this.state.imgList} />
        {this.state.imgList.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </>
    );
  }
}

export default App;
