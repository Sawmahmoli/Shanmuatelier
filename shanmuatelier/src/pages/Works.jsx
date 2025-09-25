import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// SWIPER required modules
import { FreeMode, Mousewheel } from 'swiper/modules';

// IMAGES
import wArrow from "../assets/images/works-arrow.svg"
import wSwp1 from "../assets/images/works/works_cabinet.03-1.png"
import wSwp2 from "../assets/images/works/works_cabinet.02-2.png"
import wSwp3 from "../assets/images/works/works_desk.01-1.png"
import wSwp4 from "../assets/images/works/works_chair.02-1.png"
import wSwp5 from "../assets/images/works/works_cabinet.05-1.png"

// SASS
import "../sass/works.scss"


const Works = () => {

  // 頁面置頂
  window.onload = function () {
    window.scrollTo(0, 0);
  };

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {

    if (swiper) {
      // 在 Swiper 初始化後，綁定 slideChange 事件
      swiper.on('slideChange', () => {

        // 檢查目前的索引是否等於最後一個 slide 的索引
        const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

        if (isLastSlide) {
          console.log('已經滑到最後一張 slide，禁用 mousewheel');
          swiper.mousewheel.disable();
        } else {
          console.log('滑離最後一張 slide，啟用 mousewheel');
          swiper.mousewheel.enable();
        }
      });
    }

    // 在元件 unmount 時，清除事件監聽
    return () => {
      if (swiper) {
        swiper.off('slideChange');
      }
    };
  }, [swiper]); // 依賴於 swiper 實例，當它被設定時才執行

  return (
    <>
      <section id="works">
        {/* 段落標題 */}
        <header>
          <h2>作品介紹</h2>
          <h3>Works</h3>
        </header>

        {/* Swiper */}
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          mousewheel={true}
          sensitivity={0.3}
          loop={true}
          freeMode={true}
          draggable={true}
          modules={[FreeMode, Mousewheel]}
          onSwiper={setSwiper}
          className="mySwiper swiper-wrapper"
        >
          <SwiperSlide>
            <Link className="swiper-slide" to="/WorkDetail">
              <div className="work-contents">
                <div className="work-image">
                  <img src={wSwp1} alt="" loading="lazy" />
                </div>
                <div className="work-sum">
                  <div className="content">
                    <div className="work-name">椅凳</div>
                    <div className="work-mfg">
                      <div>2022</div>
                      <div className="work-arrow">
                        <img src={wArrow} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg"></div>
                </div>
              </div>
            </Link>

          </SwiperSlide>
          <SwiperSlide><Link className="swiper-slide" to="/WorkDetail">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp2} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide><Link className="swiper-slide" to="/WorkDetail">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp3} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide><Link className="swiper-slide" to="/WorkDetail">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp4} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide><Link className="swiper-slide" href="#">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp2} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide><Link className="swiper-slide" to="/WorkDetail">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp3} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide slot="wrapper-end"><Link className="swiper-slide" to="/WorkDetail">
            <div className="work-contents">
              <div className="work-image">
                <img src={wSwp5} alt="" loading="lazy" />
              </div>
              <div className="work-sum">
                <div className="content">
                  <div className="work-name">椅凳</div>
                  <div className="work-mfg">
                    <div>2022</div>
                    <div className="work-arrow">
                      <img src={wArrow} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>
          </Link>
          </SwiperSlide>
        </Swiper>

      </section>
    </>
  )
}

export default Works