import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.imgList.map((item) => (
          <ImageGalleryItem img={item} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
