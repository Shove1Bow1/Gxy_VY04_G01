import React, { Component, useState } from "react";
import MyBounsPoints from "./My_Bouns_Points";
import SecondPage from "./Second_Page";
import ThirdPage from "./Third_Page";
import FirstPage from "./Fist_Page";
import Nav from "./NavLink";
export default function DialogDetail(props) {
  console.log(props.isOpen);
  const [getPage, setPage] = useState(1);
  function SetValue(page){
    setPage(page);
  }
  const Dialog = () => {  
    if (!props.isOpen) {
    Dialog = null;
  }
    return (
      <div>
        <div className="dialogstyle">
          <div className="row">
            <div class="col-sm-4">
              <p className="text-color-blur font-size">Chi Tiết</p>
            </div>
            <div class="col-sm-8 text-diaolog-right">
              <button
                className="dialogCloseButton text-color-blur"
                onClick={props.onClose}>
                X
              </button>
            </div>
          </div>
          <div>
            <Nav getData={getPage} setData={setPage}/>
            <div>
              {getPage === 1 ? <FirstPage /> : null}
              {getPage === 2 ? <SecondPage /> : null}
              {getPage === 3 ? <ThirdPage /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  } 

  return <Dialog/>;
}
