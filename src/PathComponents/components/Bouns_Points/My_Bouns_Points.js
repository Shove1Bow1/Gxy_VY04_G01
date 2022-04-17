import React from "react";

const MyBounsPoints = () => {
    return(
        <div class="bg-color py-4 h-100">

        <div class="container">
        <div class="row padding-top" >
          <div class="col-sm-4">
              <h4 >Điểm thưởng của tôi</h4>
          </div>
          <div class="col-sm-8 padding-tim text-color padding-top" >
              Tìm hiểu thêm                      
          </div>
        </div>  
        <div class="row">
          <div class="col-sm-4 bg-left radius-left text-color-w">
            <h6></h6>
            <h6>Điểm khả dụng</h6>
            <br/>
            <h4>0</h4>
            <b>(Trị giá VND0)</b>
            <br/>
            <br/>
            <b class="text-color-blur">+0 Điểm đang chờ</b>
          </div>
          <div class="col-sm-8 bg-right radius-right" >
            
            <div class="row padding-top">
              <div class="col-sm-4">
               <h6 class="text-color-blur">&ensp;Tiến trình tích điểm</h6>  
              </div>
              <div class="col-sm-8">
                <h6 class="padding-left1 text-color">Chi Tiết</h6>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="bg-clor mar-text">

        </div>
    </div>
    )
}
export default MyBounsPoints