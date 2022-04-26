import React from "react";
import img from "./second_page.png"



const SecondPage = () =>{
    return(
        <div>
        <h2>0</h2>
        <p className="text-color-second"><img src={img} className="img-style"/>Điểm đang chờ sẽ được kích hoạt 7 ngày sau khi bạn hoàn thành chuyến đi.</p>
        <hr/>
        <center>
            <p className="padding-text">
                Seems like you don't have any Points yet.<br/>
                Book flight or hotel to earn Points now!
            </p>
        </center>

    </div>
    )
}
export default SecondPage

