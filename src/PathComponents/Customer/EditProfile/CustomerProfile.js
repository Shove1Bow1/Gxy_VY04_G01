import React, {Component} from 'react'

class StudentComponents extends Component{

    constructor(props){
        super(props)
        this.state={
            fullName:'',
        }

        this.changefullNameHandler=this.changefullNameHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
    }

    changefullNameHandler=(event)=>{
        this.setState({fullname: event.target.value});
    }
    changeCityHandler=(event)=>{
        this.setState({City: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={emailId: this.state.emailId,firstName: this.state.firstName,lastName: this.state.lastName,BirthDay: this.state.BirthDay,Gender: this.state.Gender};
        console.log('student=>'+JSON.stringify(student));
    }

    cancel=(e)=>{
        e.targer.reset();
    }
    render(){
        return(
            <div>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <div className="card-body">
                            <form>
                                <div style={{fontSize:"20px", fontWeight:"bolder"}}>Dữ liệu cá nhân</div>
                                <div class="line"></div>
                                <div className="form-group">
                                    <div style={{fontWeight:"bolder"}}>Họ và Tên:</div>
                                    <input placeholder="VD:Họ và tên đầy đủ" name="fullName" className="form-control"
                                    value={this.state.fullName} onChange={this.changefullNameHandler}></input>
                                </div>
                                <div>Tên trong hồ sơ được rút ngắn từ họ và tên</div>
                                <div class="row">
                        
                                    
                                    <div class="col-sm-4">
                                    <div style={{fontWeight:"bolder", padding:"2px"}}>Ngày Sinh</div>
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
                                    <div class="col-sm-4">
                                    <div style={{fontWeight:"bolder", padding:"2px"}}>Tháng Sinh</div>
                                    <select name="Month">
                                        <option value="0">Chọn Tháng</option>
                                        <option value="0">Tháng Một</option>
                                        <option value="0">Tháng Hai</option>
                                        <option value="0">Tháng Ba</option>
                                        <option value="0">Tháng Tư</option>
                                        <option value="0">Tháng Năm</option>
                                        <option value="0">Tháng Sáu</option>
                                        <option value="0">Tháng Bảy</option>
                                        <option value="0">Tháng Tám</option>
                                        <option value="0">Tháng Chín</option>
                                        <option value="0">Tháng Mười</option>
                                        <option value="0">Tháng Mười Một</option>
                                        <option value="0">Tháng Mười Hai</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <div style={{fontWeight:"bolder", padding:"2px"}}>Năm Sinh</div>
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
                                        <option value="0">1904</option>
                                        <option value="0">1903</option>
                                        <option value="0">1902</option>
                                        <option value="0">1901</option>
                                        <option value="0">1900</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <div style={{fontWeight:"bolder", padding:"2px"}}>Giới Tính</div>
                                        <select name="Gender">
                                        <option value="0">Chọn Giới tính</option>
                                        <option value="0">Nam</option>
                                        <option value="0">Nữ</option>
                                        <option value="0">Khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{fontWeight:"bolder", padding:"2px"}}>Thành phố bạn đang ở:</div>
                                    <input placeholder="Nhập tên thành phố của bạn" name="City" className="form-control"
                                    value={this.state.City} onChange={this.changeCityHandler}></input>
                                </div>
                                <br></br>
                                <button className="btn btn-save" onClick={this.saveStudent} style={{backgroundColor:"rgb(242,243,243)"}}>Lưu</button>
                                <button className="btn btn-cancel" onClick={this.cancel.bind} style={{marginLeft:"10px", backgroundColor:"rgb(242,243,243)"}}>Hủy</button>
                            </form>
                        
                        </div>
                    </div>
                </div>
                <div className="card col-md-6 offset-md-3 offset-md-3 pd-3">
                    <div className="card-body">
                        <form>
                            <div>
                                <h3 style={{fontSize:"20px"}}>Số di động</h3>
                                </div>
                                <div>chỉ có thể thêm tối đa 3 số di động</div>
                                <button style={{borderRadius:"4px", fontWeight:"bolder", backgroundColor:"rgb(255,255,255)", alignItems:"center"}}>+ Thêm số di động</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponents 
