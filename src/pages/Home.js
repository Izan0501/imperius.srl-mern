import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PRO5.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br /> or $41.62/mo</p>
                                    <Link className='button'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10  justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>LAPTOPS MAX</h5>
                                        <p>From $1699.00 <br /> or $64.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>Shop the latest band</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>BUY iPad Air</h5>
                                        <p>From $599 <br /> or $54.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>FOR YOU</h4>
                                        <h5>HEADPHONES</h5>
                                        <p>From $499 <br /> or $34.62/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
