import React from "react";
import {BrowserRouter as Router , Routes , Route, link} from'react-router-dom';
const Managerment_profile=()=>{
    return (
        <Container>
            <Row>
                <Col sm={4}><link path="/">Đổi mật khẩu</link></Col>
            </Row>
            <Row>
                <Col sm={4}><link path="/">Thay đổi thông tin</link></Col>
            </Row>
            <Row>
                <Col sm={4}><link path="/">Xử lý điểm thưởng</link></Col>
            </Row>
            <Row>
                <Col sm={4}><link  path="/">Xem thống kê</link></Col>
            </Row>
            <Row>
                <Col sm={4}><link path="/">Đăng Xuất</link></Col>
            </Row>
        </Container>
    )
}
export default Managerment_profile;