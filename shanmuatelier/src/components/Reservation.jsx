import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

const Reservation = () => {

    return (
        <>
            <Link className="reserve-btn" to="/visit">
                <div className="reservation">
                    <h2>預約參觀</h2>
                </div>
            </Link>

        </>
    )
}

export default Reservation