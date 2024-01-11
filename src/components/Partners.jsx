import React from 'react';
// import diebold from '../photo/diebold.png';
import ncr from '../photo/ncr.png';
import '../css/partners.css'


export default function Partners() {
  return (
    <div className="partners-div ptb">
        <h5 className="blue subh5 subHeadh5">PARTNERED WITH LEADING COMPANIES SUCH AS</h5>
        <div className="partners-img">
            <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1702480383/dycomnet/access-lg-logo_crpxus.png" alt="" />
            <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1702480384/dycomnet/Bankers-WareHouse_pdur3t.png" alt="" />
            <img src={ncr} alt="" />
            
        </div>
      
    </div>
  )
}
