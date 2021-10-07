import React, { Component } from "react";
import { imageGalleryItem, imageGalleryItem_image} from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    state = {
      isModalOpen: false
  };

  render() {
    return (
      <li className={imageGalleryItem}>
        <img
          className={imageGalleryItem_image}
          src={this.props.img.webformatURL}
          alt="some"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
