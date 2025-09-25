import React from 'react'
import { useEffect, useRef, useId } from 'react';
import { useParams, Link } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';


// IMAGES
import lArrow from "../assets/images/left-arrow.svg"
import img1 from "../assets/images/works/works_desk.01-1.png"
import img2 from "../assets/images/works/works_desk.01-2.png"
import img3 from "../assets/images/works/works_desk.01-3.png"



// SASS
import "../sass/workDetail.scss"

const WorkDetail = () => {

  return (
    <>
      <section id="work-detail">

        {/* 段落標題 */}
        <header className="detail-header">
          <h2>作品介紹</h2>
          <h3>Works</h3>
        </header>

        <div className="detail-content">
          {/* 作品圖片 */}
          <div className="detail-img">
            {/* <img src={hero} alt={`${name} 主圖`} /> */}
            {/* <Link to="/woks" className="back">返回</Link> */}
            <img src={img1} alt={`主圖`} />
            <img src={img2} alt={`主圖`} />
            <img src={img3} alt={`主圖`} />

          </div>

          {/* 作品說明 */}
          <div className="text-box">
            <h3>山波系列｜掛壁電視櫃</h3>
            <time className="year">2025</time>

            <div className="detail-desc">
              <p>以「自然共存」為核心，將大地山川的流動曲線轉化為木紋雕刻，
                這不僅是收納物件，更像是一件能呼吸的藝術品。
                壁掛的輕盈結構，讓生活空間維持開闊，象徵人與自然的和諧共生。
              </p>
            </div>

            <div className="detail-specs">
              <div className="size">
                <h4>尺寸</h4>
                <p>W 120×D 35×H 30</p>
              </div>

              <div className="material">
                <h4>材質</h4>
                <p>天然橡木實木</p>
              </div>

              <div className="custom">
                <h4>商品訂製</h4>
                <p>商品無現貨時接單製作</p>
              </div>
            </div>

            <Link to="/works" className="back"><img src={lArrow} alt="" /></Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default WorkDetail