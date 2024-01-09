// MediaPage.js

import React from 'react';
import { useMediaStore } from './Store'; // Update to './store.jsx' or the correct path
import './css/media.css';


const MediaPage = () => {
  const { showBefore, toggleBefore } = useMediaStore();
 

  const images = [
    {
      id: 1,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440447/dycomnet/image-010_khsc0h.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440446/dycomnet/image-009_sdm2kk.jpg'],
      srcAfter: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440451/dycomnet/image-013_m6eqyf.jpg'],
      details: 'GALLERY OF HYOSUNG ATM REFURBISHMENT',
    },
    {
      id: 2,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440455/dycomnet/image-016_i6z1ii.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440454/dycomnet/image-015_hytwiw.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440454/dycomnet/image-015_hytwiw.jpg'],
      srcAfter: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440456/dycomnet/image-017_rupnll.jpg',],
      details: 'GALLERY OF CLADDING ATM OFF-SITES @ EPE GENERAL HOSPITAL, EPE LAGOS.',
    },
    {
      id: 3,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440415/dycomnet/image-019_bm30h1.jpg',],
      srcAfter: [ 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440458/dycomnet/image-018_exwq3k.jpg'],
      details: 'REPLACEMENT OF NCR ATMs WITH HYOSUNG ATMs @ OGUNLANA DRIVE SURULERE',
    },
    {
      id: 4,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440416/dycomnet/image-020_kttsgj.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440417/dycomnet/image-021_o3rirv.jpg'],
      srcAfter: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440417/dycomnet/image-022_w91ooh.jpg'],
      details: 'CONVERSION OF A SMALL LOBBY INTO ATM KIOSK @ KIRIKIRI PHASE 2',
    },
    {
      id: 5,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440422/dycomnet/image-029_e7cpbw.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440418/dycomnet/image-025_rtruuq.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440420/dycomnet/image-027_cbdddg.jpg'],
      srcAfter: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440421/dycomnet/image-028_xyllyh.jpg', ],
      details: 'STAGING AND CONSTRUCTION OF CUBICLE/CUSTOMERS’ PLATFORM. @ ONIKAN BRANCH LAGOS',
    },
    {
      id: 6,
      srcBefore: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440431/dycomnet/image-038_ymqecp.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440432/dycomnet/image-039_u1jmxo.jpg', 'https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440433/dycomnet/image-041_dt7v28.jpg'],
      srcAfter: ['https://res.cloudinary.com/ijeomaonuaju/image/upload/v1704440434/dycomnet/image-042_casrof.jpg'],
      details: 'RELOCATION OF ATM AND KIOSK FROM ADMIRALTY WAY LEKKI TO CHEVRON MICROFINANCE BANK.',
    },
    
  ];

  return (
    <div className="media-page">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 className='largeh1'>
          Latest Projects
        </h1>
        <p className="largep">
        Some of the projecst we are proud of. We make every project feel personal because our clients matter.
        </p>
    </div>
      <div className='media-button-div'>
        <button onClick={toggleBefore} disabled={!showBefore}>
          Show After
        </button>
        <button onClick={toggleBefore} disabled={showBefore}>
          Show Before
        </button>
      </div>
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="before-image-card">
            {showBefore ? (
              <div className="before-images">
                {image.srcBefore.map((beforeImage, index) => (
                  <img
                    key={index}
                    src={beforeImage}
                    alt={`Before Image ${image.id}_${index + 1}`}
                  />
                ))}
              </div>
            ) : (
              <img
                src={image.srcAfter[0]}
                alt={`After Image ${image.id}`}
              />
            )}
            {/* {showBefore ? null : (
              <div className="after-images">
                {image.srcAfter.map((afterImage, index) => (
                  <img
                    key={index}
                    src={afterImage}
                    alt={`After Image ${image.id}_${index + 1}`}
                  />
                ))}
              </div>
            )} */}
            <div className="image-details">
              <p><b>{image.details}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
