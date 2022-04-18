import React, { Component } from "react";
import MyBounsPoints from "./My_Bouns_Points";

class DialogDetail extends Component {
  render() {
    let dialog = (
      <div>
        <div className="dialogstyle">
        <div className="row">
          <div class="col-sm-4">
            <p className="text-color-blur font-size">Chi Tiết</p>
          </div>
          <div class="col-sm-8 text-diaolog-right">
            <button
              className="dialogCloseButton text-color-blur"
              onClick={this.props.onClose}
            >
              X
            </button>
          </div>
        </div>
        <hr class="my-1" />

        {/* ---------- */}
        <div>{this.props.children}</div>
      </div>
      </div>
     
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}
export default DialogDetail;
