import React, { useEffect } from 'react'

// SASS
import "../sass/visit.scss"

const Visit = () => {

  return (
    <>
      {/* VISIT */}
      <section id="visit">

        {/* 視窗容器 */}
        <div className="viewport">

          {/* 背景 */}
          <div className="bg"></div>

          {/* 聯絡區塊 */}
          <div className="visit-wrap">
            <div className="text-box">
              {/* 段落標題 */}
              <header>
                <h2>預約參觀</h2>
                <h3>Visit</h3>
              </header>

              <p>有關工作室預約參觀，<br />
                請隨時透過電話或諮詢表單與我們聯繫。</p>
              <div className="progress-box">
                <div className="progress">
                  <div className="dot-box">
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </div>
                  <span className='bar'></span>
                </div>

                <div className="state">
                  <p>輸入</p>
                  <p>確認</p>
                  <p>完成</p>
                </div>
              </div>
            </div>

            <div>
              {/* 表單 */}
              <form id="contactform" method="post">

                <div className="input-box name">
                  <label htmlFor="name">姓名 / Name <span>必填</span></label>
                  <input type="text" name="name" id="name" title="姓名欄位" placeholder="請輸入姓名"
                    required="required" autoFocus
                  />
                </div>

                <div className="input-box tel">
                  <label htmlFor="tel">聯絡電話 / Phone Number<span>必填</span></label>
                  <input type="tel" name="tel" id="tel" maxLength="10" title="聯絡電話欄位" placeholder="例如：0123456789" required="required"
                  />
                </div>

                <div className="input-box mail">
                  <label htmlFor="email">電子郵件 / E-mail<span>必填</span></label>
                  <input type="email" name="email" id="email" title="E-mail欄位" required multiple
                  />
                </div>

                <div className="input-box date">
                  <label htmlFor="date">參訪日期 / Visit Date <span>必填</span></label>
                  <input type="date" name="date" id="date" title="日期欄位" required />
                </div>

                <div className="input-box num">
                  <label htmlFor="number">參訪人數 / Number of Visitors <span>必填</span></label>
                  <input type="number" name="number" id="number" title="人數欄位" required />
                </div>

                <div className="input-box pur">
                  <label htmlFor="purpose">參訪目的 / Purpose of Visit <span>必填</span></label>
                  <input type="purpose" name="purpose" id="purpose" title="參訪目的欄位" required />
                </div>

                {/* 多行文字欄位 */}
                <div className="input-box msg">
                  <label htmlFor="message">特別需求</label>
                  <textarea name="message" id="message" rows="3" placeholder="若有特別需求，敬請提出"
                  ></textarea>
                </div>

                <button className="btn-animation" type="submit"> {/* 按鈕預設為送出 */}
                  <p>提交</p>
                </button>
              </form>
            </div>
          </div>
        </div >



      </section>
    </>
  );
}

export default Visit