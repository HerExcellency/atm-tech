import React from 'react';
import ReuseButton from './ReuseButton';
// import center from '../photo/center.jpg';
import imagea from '../photo/image-b-b.jpg';
import imageb from '../photo/image-d-d.jpg';

export default function WhatWeDo() {
  return (
    <div className='whatWeDo container ptb'> 
        <div className="row rowwwd">
        <h5 className='blue subHeadh5'>WHAT WE DO</h5>

        <p className='subheadWord'>We provide highly commendable ATM related services to all business sizes, from start-ups to enterprise-level organizations.</p>
        <div className="serviceDet">
          <div className="col-6 col-lg-6 col-sm-12 col-md-6 serviceCopy">
            <h4 className="subHeadh4">
            Our experience ranges from the supply and maintenance of Hardware and software that support the financial institutions to deliver services to her consumers.</h4>
            <p>We have partnership with major Original Equipment Manufacturers (OEM) in the industry worldwide and we are known for quality service delivery.</p>
            
            <ReuseButton url="your_page_url" buttonText="Go to Page" />
          </div>
          <div className="col-6 col-lg-6 col-sm-12 col-md-6 wwdDIvImg ">
              <img src='//res.cloudinary.com/ijeomaonuaju/image/upload/v1705233454/image-000_cz4vok_prev_ui_sxpyvd.png' alt="loader" className="borderRadius" />
          </div>
        </div>

        <div className="serviceDet">
          
          <div className="col-6 col-lg-6 col-sm-12 col-md-6 wwdDIvImg">
              <img src='//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440431/dycomnet/image-038_ymqecp.jpg' alt="loader" className="borderRadius" />
          </div>
          <div className="col-6 col-lg-6 col-sm-12 col-md-6 serviceCopy">
            <h4 className="subHeadh4">We provide highly commendable ATM related services. We are ATM specialists. You can always trust us with any ATM related work.</h4>
            <p>We provide highly commendable ATM related services. We are ATM specialists. You can always trust us with any ATM related work.</p>
            
            <ReuseButton url="your_page_url" buttonText="Go to Page" />
          </div>
        </div>
        </div>
      </div>
  )
}
