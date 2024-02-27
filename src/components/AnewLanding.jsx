import React from 'react';
import { FaBeer } from 'react-icons/fa'



export default function AnewLanding() {
   return (
    <div>
        <section className="bg-home">
            <div id="cryptoCarousel" className="carousel slide" data-bs-ride="carousel" style={{height: '80vh'}}>
                <div className="carousel-inner" style={{height: '100vh'}}>
                    <div className="carousel-item active" style={{background: "url('//res.cloudinary.com/ijeomaonuaju/image/upload/v1707658891/dycomnet/44600_iaslqe.jpg') top", height: '100vh', alignItems: 'center'}} >
                    
                        <div className="container " >
                            <div className="row justify-content-center  align-items-center">
                                <div className="col-12" style={{marginTop: '17%'}}>
                                    <div className="title-heading text-center" >
                                        <h4 className="heading fw-bold text-white title-dark mb-3">Experts In Equipments, <br/> For Banking Environments</h4>
                                        <h5 className="para-desc mx-auto text-white title-dark"> Precise. Efficient.</h5>
                                        <div className="mt-4 pt-2">
                                            <a href="javascript:void(0)" className="btn btn-primary">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item " style={{background: "url('//res.cloudinary.com/ijeomaonuaju/image/upload/v1705334780/dycomnet/bga_guwexz.jpg') top",  height: '100vh', alignItems: 'center'}}>
                    <div className="container" style={{marginTop: '15%'}}>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="title-heading text-center" >
                                    <h4 className="heading fw-bold text-white title-dark mb-3">Broad Vision, <br/>  For Your Fintech Needs</h4>
                                    <h5 className="para-desc mx-auto text-white title-dark"> Precise. Efficient.</h5>
                                    <div className="mt-4 pt-2">
                                        <a href="javascript:void(0)" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="carousel-item " style={{background: "url('//res.cloudinary.com/ijeomaonuaju/image/upload/v1705358887/dycomnet/ai_robot_beemox.jpg') top", height: '100vh', alignItems: 'center'}}>
                    <div className="container" style={{marginTop: '15%'}}>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="title-heading text-center" style={{alignItems: 'center'}}>
                                    <h4 className="heading fw-bold text-white title-dark mb-3">Great Value, <br/>  For Your Fintech Needs</h4>
                                    <h5 className="para-desc mx-auto text-white title-dark">Precise. Efficient.</h5>
                                    <div className="mt-4 pt-2">
                                        <a href="javascript:void(0)" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    </div>
   )
}