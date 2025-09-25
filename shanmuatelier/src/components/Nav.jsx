import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Nav = () => {

    // 使用 useState 來管理選單的開啟/關閉狀態
    const [open, setOpen] = useState(false);

    // 建立一個 ref，稍後掛在外層 .navbar 以便偵測點擊是否發生在此容器外
    const navRef = useRef(null);

    // 取得當前路由位置物件（含 pathname 等）=> 跳轉頁面時回初始設定
    const location = useLocation();

    const handleHamburgerClick = () => {
        // 點擊時，切換 open 的狀態
        setOpen(!open);
    };


    // 路由一變就收合 => 跳轉頁面時回初始設定
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // 點擊外部或按下 Esc 時，關閉選單
    useEffect(() => {
        const onClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const onEsc = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };

        document.addEventListener('mousedown', onClickOutside);    // 綁定「按下滑鼠」事件比 click 更即時
        document.addEventListener('keydown', onEsc);               // 綁定鍵盤事件以支援 Esc
        return () => {                                             // 清理：元件卸載或依賴變動時移除監聽器
            document.removeEventListener('mousedown', onClickOutside);
            document.removeEventListener('keydown', onEsc);
        };
    }, []);


    return (

        <div className="navbar" ref={navRef}>

            {/* HAMBURGER */}
            <button className={`hamburger ${open ? 'is-active' : ''}`}
                type="button"
                onClick={handleHamburgerClick}>

                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* NAVIGATION */}
            <nav>
                <ul className={`menu ${open ? 'show' : ''}`}>
                    <li><Link to="/">首頁 Home</Link></li>
                    <li><NavLink to="/about"
                        className={({ isActive }) => isActive ? "about active" : ""}
                    >關於山木工所 About
                    </NavLink>
                    </li>
                    <li><NavLink to="/works"
                        className={({ isActive }) => isActive ? "works active" : ""}
                    >作品介紹 Works
                    </NavLink>
                    </li>
                    <li><NavLink to="/visit"
                        className={({ isActive }) => isActive ? "visit active" : ""}
                    >預約參觀 Visit
                    </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Nav