import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';


import Homepage from './pages/Homepage'
import About from './pages/About'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import Visit from './pages/Visit'


const App = () => {
const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="wrap">
          {/* HEADER */}
          <Nav />

          {/* MAIN */}
          <main id='main-content'>
            <ScrollToTop />
            {/* path="/" 和 Link to="/" (Nav.jsx) 的引號內容相同以正確讀取*/}
            <Routes location={location} key={location.pathname}>

              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Homepage />
                </motion.div>
              } ></Route>
              <Route path="/about" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <About />
                </motion.div>
              } ></Route>
              <Route path="/works" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Works />
                </motion.div>
              } ></Route>
              <Route path="/workDetail" element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                // >
                  <WorkDetail />
                // </motion.div>
              } ></Route>
              <Route path="/visit" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Visit />
                </motion.div>
              } ></Route>
              
            </Routes>
          </main>
          {/* FOOTER */}
          <Footer />

        </div>
      </AnimatePresence>

    </>
  )
}
export default App

// // 為了讓 useLocation 生效，需要用 Router 包起來
// export default function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
