import React, { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { getApiData } from "../utils/Api";
import { searchbar } from "./searchbar/Searchbar.module.css";
import Button from "./button/Button";

class App extends Component {
  state = {
    name: "",
    imgList: [],
    page: 1,
  };

  onSubmit = (q) => {
    this.setState({ name: q });
    console.log(this.state.name);

    getApiData(this.state.name, this.state.page).then((images) =>
      this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
    );
  };

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
    getApiData(this.state.name, this.state.page).then((images) =>
      this.setState((prev) => ({ imgList: [...prev.imgList, ...images] }))
    );
  };

  render() {
    return (
      <>
        <Searchbar className={searchbar} onSubmit={this.onSubmit} />
        <ImageGallery imgList={this.state.imgList} />
        {this.state.imgList.length > 0 && <Button />}
      </>
    );
  }
}

export default App;
