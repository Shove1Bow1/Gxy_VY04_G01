import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="nav-link">
            <li className="nav-item-left">
              <button class="text-color-nav button-nav-item">
                <Link to="/" class="text-color-nav"><b>Khả dụng</b></Link>
              </button>
            </li>
            <li className="nav-item-center">
              <button class="text-color-nav button-nav-item"> <Link to="/second" class="text-color-nav"><b>Đang chờ</b></Link></button>
            </li>
            <li className="nav-item-right">
              <button class="text-color-nav button-nav-item"><Link to="/third" class="text-color-nav"><b>Lịch sử</b></Link> </button>
            </li>
          </ul>
        </div>
      </nav>
      <hr class="my-1" />
    </div>
  );
};
export default Nav;
