import React from "react";
import { Link } from "react-router-dom";
import "./FooterCustomer.css";
const FooterHomepage = () => {
    return (
        <div className="footer-homepage-customer">
            <div className="container-customize-footer">
                <div className="col-lg-5-customize-footer">
                    <div className="big-img-footer">
                        <img srcSet="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg" width="70%"/>
                    </div>
                    <div className="cover-iee">
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" />
                        <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" />
                    </div>
                    <Link to="/Partner">
                        <button className="button-partner">
                            <img srcSet="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg"></img>
                            <p style={{ color: "white" }}>Li??n H??? V???i Ch??ng T??i</p>
                        </button>
                    </Link>
                    <h3 style={{marginTop:2+"%", marginLeft: 10 + "%", color: "white",maxWidth:"80%" }}>?????i t??c thanh to??n</h3>
                    <div style={{ marginLeft: 3 + "%" }}>
                        <img src={require("./footer_img_1.PNG")} width="100%"></img>
                    </div>

                </div>
                <div className="col-lg-2-customize-footer">
                    <div className="about-traveloka">
                        <h5>V??? Traveloka</h5>
                        <ul>
                            <li style={{ marginTop: 30 + "px" }}>
                                C??ch ?????t ch???
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Li??n h??? ch??ng t??i
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tr??? gi??p
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tuy???n d???ng
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                V??? ch??ng t??i
                            </li>
                        </ul>
                    </div>
                    <div className="about-us">
                        <h5>Theo d??i ch??ng t??i tr??n</h5>
                        <ul>
                            <li style={{ marginTop: 30 + "px" }}>
                                C??ch ?????t ch???
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Li??n h??? ch??ng t??i
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tr??? gi??p
                            </li>
                            <li style={{ marginTop: 30 + "px" }}>
                                Tuy???n d???ng
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3-customize-footer">
                    <h5>S???n ph???m</h5>
                    <ul>
                        <li style={{ marginTop: 30 + "px" }}>
                            V?? m??y bay
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Kh??ch s???n
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Combo ti???t ki???m
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Xperience
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Thu?? xe
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Bi???t th??? v?? c??n h???
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            ????a ????n s??n bay
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2-customize-footer margin-top-some">
                    <h5>Kh??c</h5>
                    <ul>
                        <li style={{ marginTop: 30 + "px" }}>
                            Traveloka Affiliate
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Traveloka Blog
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Ch??nh s??ch quy???n ri??ng t??
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            ??i???u kho???n & ??i???u ki???n
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Quy ch??? ho???t ?????ng
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            ????ng k?? n??i ngh??? c???a b???n
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            ????ng k?? doanh nghi???p ho???t ?????ng du l???ch c???a b???n
                        </li>
                        <li style={{ marginTop: 30 + "px" }}>
                            Khu v???c b??o ch??
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="drawing-line" />
            <div className="company-name-line">
                <p style={{ color: "white" }}>C??ng ty TNHH Traveloka Vi???t Nam. M?? s??? DN: 0313581779. T??a nh?? An Ph??, 117-119 L?? Ch??nh Th???ng, P. 7, Q. 3, TPHCM</p>
                <p style={{ color: "white", textAlign: "center", fontSize: 20 + "px", fontWeight: "bold" }}>Copyright ?? 2022 Traveloka</p>
            </div>
        </div>
    )
}
export default FooterHomepage;