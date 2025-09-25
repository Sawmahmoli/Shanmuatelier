import React, { useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import abL1 from "/images/works/works_cabinet.04-2.png"
import abL2 from "/images/works/works_cabinet.02-1.png"
import abR1 from "/images/visit/woodcraft_visit4.jpg"
import abR2 from "/images/visit/woodcraft_visit3.jpg"

// SASS
import "../sass/about.scss"

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      < section id="about" >

        <div className="about-wrap">

          {/* 段落標題 */}
          <header >
            <h2>關於山木工所</h2>
            <h3>About Shanmu Atelier</h3>
          </header>

          <img className="img1" src={abL1} alt=""
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
          <div className="block1"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000">
            <h4>讓自然與生活一同呼吸的家</h4>
            <p>家具，應該與生活一起呼吸。山木工所的每件作品，都是在自然與人之間找到平衡的結果。我們將「自然共存」的理念，透過材質、設計與細節融入每一張桌、每一把椅，讓它們在你的生活中，不只是工具，而是伴隨日子的夥伴。
            </p>
          </div>

          <img className="img3" src={abR1} alt=""
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000" />
          <div className="block3"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000">
            <h4>工藝師的故事之手</h4>
            <p>我們的工藝師，並非只是製作者，更是故事的編織者。他們在木材的紋路中，看見四季的更迭，在雕刻與打磨的節奏中，融入了屬於自己的生活經歷與情感。當你觸碰一張桌、一把椅，你觸碰的不只是家具，更是工藝師的記憶與心意。每件作品的獨特之處，不只是外觀設計，而是背後那份真誠與細膩。
            </p>
          </div>

          <img className="img2" src={abL2} alt=""
            data-aos="fade-up"
            data-aos-duration="1000" />
          <div className="block2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000">
            <h4>從工坊到你身邊</h4>
            <p>你會看見的不只是商品，而是一場視覺與情感的旅程。我們希望每一次的瀏覽，都是一次與工藝師靈魂對話的機會；每一次的選擇，都是一次對自然共存理念的支持與延續。這不僅是購買家具，而是為生活添上一份詩意與溫度。
            </p>
          </div>

          <div className='iframe'
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <iframe
              className='video'
              src="https://www.youtube.com/embed/ly0LrTQx3zA?si=tCHgOxGpETLRcUyW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

        </div>


        <div className="bg"></div>

      </section >


    </>
  )
}

export default About