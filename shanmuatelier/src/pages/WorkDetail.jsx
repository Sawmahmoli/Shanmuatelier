import React from 'react'
import { useEffect, useRef, useId } from 'react';
import { useParams, Link } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';


// IMAGES
import glarrow from "../assets/images/gl-arrow.svg"
import img1 from "../assets/images/works/works_desk.01-1.jpg"
import img2 from "../assets/images/works/works_desk.01-2.jpg"
import img3 from "../assets/images/works/works_desk.01-3.jpg"



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
            <h3>侘寂系列｜實木椅凳</h3>
            <time className="year">2025</time>

            <div className="detail-desc">
              <p>此木椅凳以「日常的溫度」為出發點，強調簡潔與實用。
                圓潤造型帶來溫潤觸感，既是能獨立存在成為一件簡單的家具，
                也能融入不同空間氛圍，成為陪伴生活的溫柔支點。
              </p>
            </div>

            <div className="detail-specs">
              <div className="size">
                <h4>尺寸</h4>
                <p>W40 × D30 × H45</p>
              </div>

              <div className="material">
                <h4>材質</h4>
                <p>胡桃木實木 + 天然木蠟油</p>
              </div>

              <div className="custom">
                <h4>商品訂製</h4>
                <p>商品無現貨時可接單製作</p>
              </div>
            </div>

            <Link to="/works" className="back">
            <img src={glarrow} alt="" />
            <p>回上一頁</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default WorkDetail