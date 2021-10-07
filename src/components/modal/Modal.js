import React, { Component } from 'react';
import { overlay, modal } from "./Modal.module.css";

class Modal extends Component {
    state = {
        imgs: [],
     }
    render() {
        return (
          <div className={overlay}>
            <div></div>
          </div>
        );
    }
}

export default Modal;
