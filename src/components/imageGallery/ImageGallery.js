import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { imageGallery } from "./ImageGallery.module.css";
import Button from "../button/Button";

class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <>
        <ul className={imageGallery}>
          {this.props.imgList.map((item) => (
            <ImageGalleryItem img={item} />
          ))}
        </ul>
        {this.props.imgList.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </>
    );
  }
}

export default ImageGallery;
