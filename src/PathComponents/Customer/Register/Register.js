import React, { Component, useState } from 'react'

export default function Register() {


    return (
        <div>
            <div className="container">
                <div className="row-form">
                    <h1 className="text-center">Đăng ký thành viên</h1>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input placeholder="VD:email@example.com" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Full Name:</label>
                                    <input placeholder="Họ và tên của bạn" name="fullName" className="form-control"
                                        value={this.state.fullName} onChange={this.changeFullNameHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Pass Word:</label>
                                    <input placeholder="Mật khẩu của bạn" name="Password" className="form-control"
                                        value={this.state.Password} onChange={this.changePasswordHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password:</label>
                                    <input placeholder="Xác nhận mật khẩu của bạn" name="ConfirmPassword" className="form-control"
                                        value={this.state.ConfirmPassword} onChange={this.changeConfirmPasswordHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Telephone:</label>
                                    <input placeholder="Số điện thoại của bạn" name="Telephone" className="form-control"
                                        value={this.state.Telephone} onChange={this.changeTelephoneHandler}></input>
                                </div>
                                <div class="row-select">
                                    <div class="col-sm-3">
                                        <div style={{ fontWeight: "bolder", padding: "2px" }}>Ngày Sinh</div>
                                        <select name="Day">
                                            <option value="0">Chọn ngày</option>
                                            <option value="0">1</option>
                                            <option value="0">2</option>
                                            <option value="0">3</option>
                                            <option value="0">4</option>
                                            <option value="0">5</option>
                                            <option value="0">6</option>
                                            <option value="0">7</option>
                                            <option value="0">8</option>
                                            <option value="0">9</option>
                                            <option value="0">10</option>
                                            <option value="0">11</option>
                                            <option value="0">12</option>
                                            <option value="0">13</option>
                                            <option value="0">14</option>
                                            <option value="0">15</option>
                                            <option value="0">16</option>
                                            <option value="0">17</option>
                                            <option value="0">18</option>
                                            <option value="0">19</option>
                                            <option value="0">20</option>
                                            <option value="0">21</option>
                                            <option value="0">22</option>
                                            <option value="0">23</option>
                                            <option value="0">24</option>
                                            <option value="0">25</option>
                                            <option value="0">26</option>
                                            <option value="0">27</option>
                                            <option value="0">28</option>
                                            <option value="0">29</option>
                                            <option value="0">30</option>
                                            <option value="0">31</option>

                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <div style={{ fontWeight: "bolder", padding: "2px" }}>Tháng Sinh</div>
                                        <select name="Month">
                                            <option value="0">Chọn Tháng</option>
                                            <option value="0">1</option>
                                            <option value="0">2</option>
                                            <option value="0">3</option>
                                            <option value="0">4</option>
                                            <option value="0">5</option>
                                            <option value="0">6</option>
                                            <option value="0">7</option>
                                            <option value="0">8</option>
                                            <option value="0">9</option>
                                            <option value="0">10</option>
                                            <option value="0">11</option>
                                            <option value="0">12</option>

                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <div style={{ fontWeight: "bolder", padding: "2px" }}>Năm Sinh</div>
                                        <select name="Year">
                                            <option value="0">Chọn Năm</option>
                                            <option value="0">2021</option>
                                            <option value="0">2020</option>
                                            <option value="0">2019</option>
                                            <option value="0">2018</option>
                                            <option value="0">2017</option>
                                            <option value="0">2016</option>
                                            <option value="0">2015</option>
                                            <option value="0">2014</option>
                                            <option value="0">2013</option>
                                            <option value="0">2012</option>
                                            <option value="0">2011</option>
                                            <option value="0">2010</option>
                                            <option value="0">2009</option>
                                            <option value="0">2008</option>
                                            <option value="0">2007</option>
                                            <option value="0">2006</option>
                                            <option value="0">2005</option>
                                            <option value="0">2004</option>
                                            <option value="0">2003</option>
                                            <option value="0">2002</option>
                                            <option value="0">2001</option>
                                            <option value="0">2000</option>
                                            <option value="0">1999</option>
                                            <option value="0">1999</option>
                                            <option value="0">1998</option>
                                            <option value="0">1997</option>
                                            <option value="0">1996</option>
                                            <option value="0">1995</option>
                                            <option value="0">1994</option>
                                            <option value="0">1993</option>
                                            <option value="0">1992</option>
                                            <option value="0">1991</option>
                                            <option value="0">1990</option>
                                            <option value="0">1989</option>
                                            <option value="0">1988</option>
                                            <option value="0">1987</option>
                                            <option value="0">1986</option>
                                            <option value="0">1985</option>
                                            <option value="0">1984</option>
                                            <option value="0">1983</option>
                                            <option value="0">1982</option>
                                            <option value="0">1981</option>
                                            <option value="0">1980</option>
                                            <option value="0">1979</option>
                                            <option value="0">1978</option>
                                            <option value="0">1977</option>
                                            <option value="0">1976</option>
                                            <option value="0">1975</option>
                                            <option value="0">1974</option>
                                            <option value="0">1973</option>
                                            <option value="0">1972</option>
                                            <option value="0">1971</option>
                                            <option value="0">1970</option>
                                            <option value="0">1969</option>
                                            <option value="0">1968</option>
                                            <option value="0">1967</option>
                                            <option value="0">1966</option>
                                            <option value="0">1965</option>
                                            <option value="0">1964</option>
                                            <option value="0">1963</option>
                                            <option value="0">1962</option>
                                            <option value="0">1961</option>
                                            <option value="0">1960</option>
                                            <option value="0">1959</option>
                                            <option value="0">1958</option>
                                            <option value="0">1957</option>
                                            <option value="0">1956</option>
                                            <option value="0">1955</option>
                                            <option value="0">1954</option>
                                            <option value="0">1953</option>
                                            <option value="0">1952</option>
                                            <option value="0">1951</option>
                                            <option value="0">1950</option>
                                            <option value="0">1949</option>
                                            <option value="0">1948</option>
                                            <option value="0">1947</option>
                                            <option value="0">1946</option>
                                            <option value="0">1945</option>
                                            <option value="0">1944</option>
                                            <option value="0">1943</option>
                                            <option value="0">1942</option>
                                            <option value="0">1941</option>
                                            <option value="0">1940</option>
                                            <option value="0">1939</option>
                                            <option value="0">1938</option>
                                            <option value="0">1937</option>
                                            <option value="0">1936</option>
                                            <option value="0">1935</option>
                                            <option value="0">1934</option>
                                            <option value="0">1933</option>
                                            <option value="0">1932</option>
                                            <option value="0">1931</option>
                                            <option value="0">1930</option>
                                            <option value="0">1929</option>
                                            <option value="0">1928</option>
                                            <option value="0">1927</option>
                                            <option value="0">1926</option>
                                            <option value="0">1925</option>
                                            <option value="0">1924</option>
                                            <option value="0">1923</option>
                                            <option value="0">1922</option>
                                            <option value="0">1921</option>
                                            <option value="0">1920</option>
                                            <option value="0">1919</option>
                                            <option value="0">1918</option>
                                            <option value="0">1917</option>
                                            <option value="0">1916</option>
                                            <option value="0">1915</option>
                                            <option value="0">1914</option>
                                            <option value="0">1913</option>
                                            <option value="0">1912</option>
                                            <option value="0">1911</option>
                                            <option value="0">1910</option>
                                            <option value="0">1909</option>
                                            <option value="0">1908</option>
                                            <option value="0">1907</option>
                                            <option value="0">1906</option>
                                            <option value="0">1905</option>
                                            <option value="1904">1904</option>
                                            <option value="1903">1903</option>
                                            <option value="1902">1902</option>
                                            <option value="1901">1901</option>
                                            <option value="1900">1900</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <div style={{ fontWeight: "bolder", padding: "2px" }}>Giới Tính</div>
                                        <select name="Gender">
                                            <option value="0">Chọn Giới tính</option>
                                            <option value="0">Nam</option>
                                            <option value="0">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}