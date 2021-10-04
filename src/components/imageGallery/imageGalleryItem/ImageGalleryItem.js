import React, { Component } from "react";

class ImageGalleryItem extends Component {
  state = {
  };

  render() {
    return (
        <li>
            <img
                src={this.props.img.webformatURL}
                alt="some"
            />
        </li>
    );
  }
}

export default ImageGalleryItem;
