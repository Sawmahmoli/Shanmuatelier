import React from 'react'
import BackToTop from "./BackToTop"

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-wrap">
                    <div className="title">
                        <h4>山木工所</h4>
                        <p>Shanmu Atelier</p>
                    </div>
                    <div className="info">
                        <div className="add">
                            <h5>地址</h5>
                            <p>台灣 新北市 和平區 恩慈里 良善路 9-1 號</p>
                        </div>
                        <div className="tel">
                            <h5>電話</h5>
                            <p>02-2345-6789</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">

                    <small>Copyright &copy; 2025 山木工所 保留一切權利</small>
                </div>
                <BackToTop />
            </footer>
        </>
    )
}

export default Footer