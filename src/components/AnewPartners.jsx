import React from 'react'
import oki from '../photo/oki.png'
import ncr from '../photo/ncr.png'
import diebold from '../photo/diebold.png'
import Hess from '../photo/HEss.png'
// import oki from '../photo/'
// import oki from '../photo/'


export default function AnewPartners() {
  return (
    <div>
        <section className="py-4 border-bottom border-top" style={{backgroundColor: '#fff'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                        <img src={oki} className="avatar avatar-ex-sm" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                        <img src={ncr} className="avatar avatar-ex-sm" alt=""/>
                    </div>
                    
                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                        <img src={diebold} className="avatar avatar-ex-sm" alt=""/>
                    </div>
                    
                    <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                        <img src={Hess} className="avatar avatar-ex-sm" alt=""/>
                    </div>
                    
                    
                </div>
            </div>
        </section>
      
    </div>
  )
}
