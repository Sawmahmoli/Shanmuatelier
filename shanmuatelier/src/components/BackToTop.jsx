import React from 'react'
// IMAGES
import fArrow from "../assets/images/footer-arrow.svg"

const backToTop = () => {

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <img src={fArrow} alt="" className='top-btn' onClick={backToTop} />
        </>
    )
}

export default backToTop