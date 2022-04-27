import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DialogDetail from "./Dialog_Deatail";
import FirstPage from "./Fist_Page";
import Nav from "./NavLink";
import SecondPage from "./Second_Page";
import ThirdPage from "./Third_Page";
import imgdown from "./img-1.png"

class MyBounsPoints extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div>
        <div class="bg-color py-4 h-100">
          <div class="container">
            <div class="row padding-top">
              <div class="col-sm-4">
                <h4>Điểm thưởng của tôi</h4>
              </div>
              <div class="col-sm-8 padding-left1 text-color padding-top">
                <a>Tìm hiểu thêm </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 bg-left radius-left text-color-w">
                <p></p>
                <p onClick={(e) => this.setState({ isOpen: true })}><button className="buttonDialog-2">Điểm khả dụng<img className="img-1" src={imgdown}/></button></p>
               <div>
               <h4>&nbsp;0</h4>
                <b>&nbsp;(Trị giá VND0)</b>
                <br />
                <br />
                <p><b class="text-color-blur-2">&nbsp;+0 Điểm đang chờ</b></p>
               </div>
              </div>
              <div class="col-sm-8 bg-right radius-right">
                <div class="row padding-top">
                  <div class="col-sm-4">
                    <h6 class="text-color-blur">&ensp;Tiến trình tích điểm</h6>
                  </div>
                  <div class="col-sm-8">
                    <h6
                      onClick={(e) => this.setState({ isOpen: true })}
                      class="padding-left1"
                    >
                      <button class=" text-color buttonDialog">Chi Tiết</button>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogDetail
            isOpen={this.state.isOpen}
            onClose={(e) => this.setState({ isOpen: false })}>
            <div>
                <Nav />
                <Routes>
                  <Route path="/" element={<FirstPage />} />
                  <Route path="/second" element={<SecondPage />} />
                  <Route path="/third" element={<ThirdPage />} />
                </Routes>
            </div>
          </DialogDetail>
          <div class="bg-clor mar-text"></div>
        </div>
      </div>
    );
  }
}
export default MyBounsPoints;
