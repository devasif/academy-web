import { useState } from "react"
import "./home.css"
import data from "../data"
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slider1 from "../../image/slider1.png";
const Home =()=>{
   

    return(
        <>
      
{/* start section */}
            <section className="heading-section">
                <div className="container g-0">
                    <div className="row g-0">
                        <div className="col">
                            <div className="heding-scroll d-flex justify-content-between">
                               <div className="update">
                                   <h3>নোটিশঃ</h3>
                               </div>
                               <div className="news ">
                               <marquee behavior="" direction="left"><h1> সকল শিক্ষার্থীদের জানানো যাচ্ছে যে, আগামী ২৮/১/২০২২ তারিখ রোজঃ শুক্রবার কোচিং এর মাসিক পরিক্ষা অনুষ্ঠিত হইবে ,  সকল শিক্ষার্থীদের ৯টা ৩০ মিনিট এর মধ্যে উপস্থিত থাকার জন্য বলা হলো। ধন্যবাদ........</h1></marquee>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="carosel">
                            <Carousel>
                <div>
                    <img src={slider1} alt="slider img" />
                    <p className="legend">Mission A+ Coaching Center
</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                    <p className="legend">Mission A+ Coaching Center
</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                    <p className="legend">Mission A+ Coaching Center
</p>
                </div>
            </Carousel>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="side-bar">
                            <div className="important-list">
                                <h2>Important Links</h2>
                                <Link to="/result" className="link">Result</Link>
                                <Link to="/" className="link"> Student List</Link>
                                <Link to="/" className="link"> Contact Us</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;