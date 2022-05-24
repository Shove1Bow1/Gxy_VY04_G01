import axios from 'axios';
import React, { Component, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import './Profile.css';
export default function CustomerProfile(props) {
    const [getCookies, setCookies,removeCookie] = useCookies();
    const [getFullName, setFullName] = useState("");
    const [getDay, setDay] = useState("0");
    const [getMonth, setMonth] = useState("0");
    const [getYear, setYear] = useState("0");
    const [getAddress, setAddress] = useState("");
    const [getCustomerID, setCustomerID] = useState("");
    const [getGender, setGender] = useState("");
    const [getPackage, setPackage] = useState({});
    useEffect(() => {
        console.log(getCookies.Customer)
        if(getCookies.Customer){
            axios.post("https:////gxyvy04g01backend-production.up.railway.app/Customer/getCustomerInfo", {
                TOKEN: getCookies.Customer,
            }).then(res => {
                console.log(res.data);
                setPackage(res.data.PACKAGE);
            })
        }
        else if(props.value){
            axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getCustomerInfo", {
                TOKEN: props.value,
            }).then(res => {
                setPackage(res.data.PACKAGE);
            })
        }
    },[])
    console.log(getPackage);
    useEffect(()=>{ 
        console.log(getPackage);
        setFullName(getPackage.CUSTOMER_NAME);
        setDay(getPackage.CUSTOMER_DAYOFBIRTH);
        setAddress(getPackage.CUSTOMER_ADDRESS);
        setGender(getPackage.CUSTOMER_GENDER);
        setMonth(getPackage.CUSTOMER_MONTHOFBIRTH);
        setYear(getPackage.CUSTOMER_YEAROFBIRTH);
    })
    const onCancelEvent = () => {
        window.location.reload();
    }
    const saveNewInfo = () => {
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/updateInfo", {
            CUSTOMER_TOKEN: getCookies.Customer,
            CUSTOMER_NAME: getFullName,
            CUSTOMER_ADDRESS: getAddress,
            CUSTOMER_GENDER: getGender,
            CUSTOMER_BIRTHDAY: getYear + "-" + getMonth + "-" + getDay,
        }).then(res => { 
            if(res.data.STATUS){
                removeCookie("Customer");
                setCookies("Customer",res.data.PACKAGE,{path:"/",maxAge:res.data.EXPIRED_TIME});
                window.location.reload();
                window.alert("Đổi thông tin thành công");
                return;
            }
            else{
                window.alert("Có lỗi xảy ra trong quá trình đổi thông tin");
            }
         })
    }
    return (
        <>
            <div className='row-head'>
                <div className='card offset-md-4 col-md-6'>
                    <div className='card-head'>
                        <form className='form-head'>
                            <div style={{ fontWeight: "bolder" }}>Dữ liệu cá nhân</div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row-form">
                <div className="card offset-md-4 col-md-6 ">
                    <div className="card-body">
                        <div className="form-group">
                            <div style={{ fontWeight: "bolder" }}>Họ và Tên:</div>
                            <input placeholder="VD:Họ và tên đầy đủ" name="fullName" className="form-control"
                                value={getFullName} onChange={(e) => setFullName(e.target.value)}></input>
                        </div>
                        <div>Tên trong hồ sơ được rút ngắn từ họ và tên</div>
                        <div class="row-select">
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Ngày Sinh</div>
                                <select name="Day" value={getDay} onChange={(e) => setDay(e.target.value)}>
                                    <option value="0" selected disabled>Chọn ngày</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Tháng Sinh</div>
                                <select name="Month" value={getMonth} onChange={(e) => setMonth(e.target.value)}>
                                    <option value="0" selected disabled>Chọn Tháng</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Năm Sinh</div>
                                <select name="Year" value={getYear} onChange={(e) => setYear(e.target.value)}>
                                    <option value="0" selected disabled>Chọn Năm</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1995">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                    <option value="1919">1919</option>
                                    <option value="1918">1918</option>
                                    <option value="1917">1917</option>
                                    <option value="1916">1916</option>
                                    <option value="1915">1915</option>
                                    <option value="1914">1914</option>
                                    <option value="1913">1913</option>
                                    <option value="1912">1912</option>
                                    <option value="1911">1911</option>
                                    <option value="1910">1910</option>
                                    <option value="1909">1909</option>
                                    <option value="1908">1908</option>
                                    <option value="1907">1907</option>
                                    <option value="1906">1906</option>
                                    <option value="1905">1905</option>
                                    <option value="1904">1904</option>
                                    <option value="1903">1903</option>
                                    <option value="1902">1902</option>
                                    <option value="1901">1901</option>
                                    <option value="1900">1900</option>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Giới Tính</div>
                                <select name="Gender" value={getGender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="-1" selected disabled>Chọn Giới tính</option>
                                    <option value="0">Nam</option>
                                    <option value="1">Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div style={{ fontWeight: "bolder", padding: "2px" }}>Thành phố bạn đang ở:</div>
                            <input placeholder="Nhập tên thành phố của bạn" name="City" className="form-control"
                                value={getAddress} onChange={(e) => setAddress(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className='click-btn'>
                            <button className="btn-save" onClick={() => saveNewInfo}>Lưu</button>
                            <button className="btn-cancel" onClick={() => onCancelEvent}>Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card offset-md-4 col-md-6">
                <div className='tele'>
                    <div className="card-body">

                        <div>
                            <h3 style={{ fontSize: "20px" }}>Số di động</h3>
                        </div>
                        <div>chỉ có thể thêm tối đa 3 số di động</div>
                        <button style={{ borderRadius: "4px", fontWeight: "bolder", backgroundColor: "rgb(255,255,255)", alignItems: "center" }}>+ Thêm số di động</button>

                    </div>
                </div>
            </div>
        </>
    )
}