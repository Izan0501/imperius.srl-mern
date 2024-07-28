import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline:  
                <a href='tel: +54381683547' className='text-white'>+54 381683547</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h4>
                <Link className='text-white'>
                  Imperius.srl
                </Link>
                </h4>
            </div>
            <div className="col-5"></div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
