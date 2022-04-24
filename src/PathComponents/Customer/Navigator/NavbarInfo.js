import { FaCog, FaPowerOff, FaTag, FaCoins, FaCreditCard, FaBell, FaClipboardList } from "react-icons/fa";
import { GrNotes, } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";



function Navbar(prop) {
    return(
        <div style={{ position: "fixed", left: "0px", top: "20%", padding: "4px 0", display: "flex", flexDirection: "column", transformOrigin: "left center" }}>
            <div>
                <FaCoins />
                <span>Điểm thưởng của tôi</span>
            </div>
            <div>
                <FaCreditCard />
                <span>Thẻ của tôi</span>
            </div>
            <div>
                <FaClipboardList />
                <span>Đặt chổ của tôi</span>
            </div>
            <div>
                <GrNotes />
                <span>Danh sách giao dịch</span>
            </div>
            <div>
                <FaBell />
                <span>Thông báo giá vé máy bay</span>
            </div>
            <div>
                <BsPeople />
                <span>Passenger Quick Pick</span>
            </div>
            <div>
                <FaTag />
                <span>Khuyến mãi</span>
            </div>
            <div>
                <FaCog />
                <span>Tài Khoản</span>
            </div>
            <div>
                <FaPowerOff />
                <span>Đang Đăng Xuất</span>
            </div>
        </div>
    )
}
export default Navbar;