import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { getApiData } from "../../utils/Api";

class ImageGallery extends Component {
  state = {
    img: [],
  };

  getImages = () => {
    getApiData("home", 1).then((images) =>
      this.setState((prev) => ({ img: [...prev.img, ...images] }))
    );
  };

  render() {
    return (
      <ul>
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
