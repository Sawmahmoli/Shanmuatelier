import { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import logo from "/shanmu-logo.png"
import asa from "../assets/images/visit/woodcraft_visit3.jpg"
import vst1 from "../assets/images/visit/woodcraft_visit7.jpg"
import vst2 from "../assets/images/visit/woodcraft_visit2.jpg"
import vst3 from "../assets/images/visit/woodcraft_visit4.jpg"
import vst4 from "../assets/images/visit/woodcraft_visit6.jpg"
import vst5 from "../assets/images/visit/woodcraft_visit8.jpg"
import varrow from "../assets/images/left-arrow.svg"
import hero from "../assets/images/visit/woodcraft_visit9.jpg"

// components
import Works from "./Works.jsx";
import Reservation from "../components/Reservation.jsx"

// SWIPER
import sw1 from "../assets/images/works/works_livingroom.01-1.png"
import sw2 from "../assets/images/works/works_cabinet.05-1.png"
import sw3 from "../assets/images/works/works_chair.03-1.png"
import sw4 from "../assets/images/visit/woodcraft_visit1.jpg"

// SASS
import "../sass/homepage.scss"


// Parallax
function useParallaxToCenter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 取得 items
    const items = Array.from(section.querySelectorAll(".image-box .img"));
    if (items.length === 0) return;

    // 算出進度
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    // 進度曲線的 ease-out
    const ease = t => 1 - (1 - t) ** 3;

    // 線性插值 => 得到數值
    const lerp = (a, b, t) => a + (b - a) * t;

    // 量測：把 B 記成「頁面座標」，render 再轉回 viewport
    let measured = [];
    const measureAll = () => {
      const sRect = section.getBoundingClientRect();
      const Bpage = {
        x: sRect.left + sRect.width / 2 + window.scrollX,
        y: sRect.top + sRect.height / 1.25 + window.scrollY,
      };
      measured = items.map(el => {
        const r = el.getBoundingClientRect();
        const A = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        return { el, A, Bpage };
      });

    };

    // 進入可視區域的 raw 設定為 0
    const rawProgress = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const passed = vh - rect.top;
      return passed / (total || 1);   // 不 clamp，保留原始值
    };

    // 2) 進可視時鎖定 baseline
    let entryRaw = 0;

    // 3) 真正用來驅動動畫的進度：把 entryRaw 視為 0
    const progress = () => {
      const raw = rawProgress();
      const norm = (raw - entryRaw) / Math.max(1e-6, 1 - entryRaw); // 防除以 0
      return clamp(norm, 0, 1);
    };

    const canTranslate = CSS?.supports?.("translate: 1px 1px") ?? false;


    // 4) render 用校正後的進度再做 ease
    let ticking = false;
    const render = () => {
      ticking = false;
      const t = ease(progress());

      for (const m of measured) {
        const Bx = m.Bpage.x - window.scrollX;
        const By = m.Bpage.y - window.scrollY;

        const x = lerp(m.A.x, Bx, t) - m.A.x;  // 用「量測時的 A」當基準
        const y = lerp(m.A.y, By, t) - m.A.y;

        m.el.style.translate = `${x}px ${y}px`;  // 不覆蓋既有 transform
        m.el.style.willChange = "transform";
      }

    };

    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };
    const onResize = () => { measureAll(); render(); };

    let ro = null;
    let rafId = null;
    let cleanupImg = [];
    // 重要！！必須宣告
    let isActive = false;

    const start = () => {

      if (isActive) return;
      isActive = true;

      rafId = requestAnimationFrame(() => {
        measureAll();
        entryRaw = rawProgress(); // ← 進可視這一刻，記錄 baseline
        // 先用 t=0 畫一次，保證從起點開始
        for (const { el } of measured) el.style.translate = `0px 0px`;
        render();
      });

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      // window.addEventListener("resize", onWindowResizeForTrigger);

      ro = new ResizeObserver(() => { measureAll(); render(); });
      // items.forEach(el => ro.observe(el));
      ro.observe(section);

      // 圖片載入補強
      cleanupImg = [];
      items.forEach(el => {
        const img = el.querySelector("img");
        if (img && !img.complete) {
          const cb = () => { measureAll(); render(); };
          img.addEventListener("load", cb, { once: true });
          cleanupImg.push([img, cb]);
        }
      });
    };

    const stop = () => {
      if (!isActive) return;
      isActive = false;

      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      if (ro) ro.disconnect();
      cleanupImg.forEach(([img, cb]) => img.removeEventListener("load", cb));
      // 清掉這次位移；不要清 transform 以免洗掉 rotate/scale
      measured.forEach(({ el }) => { el.style.translate = ""; el.style.willChange = ""; });
    };

    // 只要進可視就啟動，離開就停止
    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? start() : stop(); },
      {
        threshold: 0,
        rootMargin: "0px 0px -130% 0px"
      }
    );

    io.observe(section);

    // 最終清理（切換路由/卸載）
    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  return sectionRef;
}

export default function Homepage() {

  const sectionRef = useParallaxToCenter();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* logo */}
      <figure className="logo">
         <Link to="/">
        <img src={logo} alt="山木工所Logo" />
        <figcaption>Shanmu Atelier</figcaption>
        </Link>
      </figure>

      {/* HERO */}
      < section className="hero" >

        <div className="swiper-wrap">
          {/* <img src={hero} alt="" /> */}
          <Swiper
            centeredSlides={true}
            effect={'fade'}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className=".swiper-slide"><img src={sw1} alt="Hero大圖" /></SwiperSlide>
            <SwiperSlide className=".swiper-slide"><img src={sw2} alt="Hero大圖" /></SwiperSlide>
            <SwiperSlide className=".swiper-slide"><img src={sw3} alt="Hero大圖" /></SwiperSlide>
            <SwiperSlide className=".swiper-slide"><img src={sw4} alt="Hero大圖" /></SwiperSlide>

          </Swiper>
        </div>

        {/* reservation */}
        <Reservation />
      </section>

      {/* ABOUT */}
      < section id="home-about" >
        <header>
          <h2>關於山木工所</h2>
          <h3>About Shanmu Atelier</h3>
        </header>
        <div className="text-box"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
        >
          <h4>工藝師的故事之手</h4>
          <p>我們的工藝師，並非只是製作者，更是故事的編織者。他們在木材的紋路中，看見四季的更迭，在雕刻與打磨的節奏中，融入了屬於自己的生活經歷與情感。當你觸碰一張桌、一把椅，你觸碰的不只是家具，更是工藝師的記憶與心意。每件作品的獨特之處，不只是外觀設計，而是背後那份真誠與細膩。
          </p>
        </div>
        <div className="about-img"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700">
          <img src={asa} alt="" />

        </div>
        <div className="bg"></div>
      </section>

      {/* WORKS */}
      < Works />

      {/* VISIT */}
      <section
        id="homeVisit"
        ref={sectionRef}
      >
        <header>
          <Link to="/visit">
            <h2>預約參觀</h2>
            <h3>Visit</h3>
            <img src={varrow} alt="" />
          </Link>
        </header>

        <div className="image-box">
          {/* 照片 */}
          <div className="img img1" id="image1"><img src={vst1} alt="" /></div>
          <div className="img img2" id="image2"><img src={vst2} alt="" /></div>
          <div className="img img3" id="image3"><img src={vst3} alt="" /></div>
          <div className="img img4" id="image4"><img src={vst4} alt="" /></div>
          <div className="img img5" id="image5"><img src={vst5} alt="" /></div>
          {/* 段落標題 */}
        </div>


      </section>
    </>
  )
}
