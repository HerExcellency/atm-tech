import React from 'react'
import aboutLand from './photo/projects/aboutLand.jpg'
import cardtodo from './photo/projects/cardtodo.png'
import oki from './photo/oki.png'
import ncr from './photo/ncr.png'
import diebold from './photo/diebold.png'
import Hess from './photo/HEss.png'
import fidelity from './photo/fidelity.svg'
import polaris from './photo/polarisi.png'
import wwe from './photo/wwe.png'
import { FaGlobe, FaHandshake, FaLaptopCode, FaRocket, FaStar } from 'react-icons/fa'

export default function AnewAbout() {
  return (
    <div>
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: `url(${aboutLand})`}}>
            <div class="bg-overlay"></div>
            <div class="container">
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="pages-heading title-heading">
                            <h2 class="text-white title-dark"> Aboutus </h2>
                            <p class="text-white-50 para-desc mb-0 mx-auto">Dycom Net is a multi-vendor ATM company designed to deliver cutting edge sales and support services to banks in Africa.</p>
                        </div>
                    </div>
                </div> 
                
                <div class="position-breadcrumb">
                    <nav aria-label="breadcrumb" class="d-inline-block">
                        <ul class="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li class="breadcrumb-item"><a href="index.html">Dycomnet</a></li>
                            <li class="breadcrumb-item"><a href="page-aboutus-two.html#">Company</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Aboutus</li>
                        </ul>
                    </nav>
                </div>
            </div> 
        </section>
        <div class="position-relative">
            <div class="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="section">
            <div class="container">
                <div class="row align-items-center" id="counter">
                    <div class="col-md-6">
                        <img src={wwe} class="img-fluid" alt="" />
                    </div>

                    <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="ms-lg-4">
                            <div class="d-flex mb-4">
                                <span class="text-primary h1 mb-0"><span class="counter-value display-1 fw-bold" data-target="15">7</span>+</span>
                                <span class="h6 align-self-end ms-2">Years <br/> Experience</span>
                            </div>
                            <div class="section-title">
                                <h4 class="title mb-4">Who we are ?</h4>
                                <p class="text-mutedly"> Together with our partners Banqtec AG (Ratiodata) – the largest multi brand ATM maintenance company in Germany, <span class="text-primary fw-bold"> Dycomnet </span> has the technical capability and spare parts capacity to provide unparalleled support for your NCR, Wincor ATMs and other major brands. <br />We have strategically positioned warehouses and zonal offices in Lagos, Enugu, Port Harcourt and Abuja. We also have branches in other African countries in Accra Ghana and Cameroon</p>
                                <a href="javascript:void(0)" class="btn btn-primary mt-3">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container " style={{marginTop: '30px'}}>
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={oki} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)' }}/>
                    </div>

                    {/* <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={diebold} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)' }}/>
                    </div> */}
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={Hess} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}/>
                    </div>
                    <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={polaris} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}/>
                    </div>
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={ncr} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)' }}/>
                    </div>
                    <div class="col-lg-2 col-md-2 col-6 text-center pt-4">
                        <img src={fidelity} class="avatar avatar-ex-sm" alt="" style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}/>
                    </div>
                    
                   
                    
                    
                </div>
            </div>
        </section>
        
        <section class="section bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h6 class="text-primary">Our Commitment</h6>
                            <h4 class="title mb-4">How do we works ?</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 mt-4 pt-2">
                        <div class="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-presentation-edit rounded h3 mb-0"></i> */}
                                {/* <FontAwesomeIcon icon={faGlobe} size="3x" /> */}
                                <FaGlobe className='h3 fa-solid fa-globe'/>
                            </div>

                            <div class="card-body">
                                <h5 class="text-dark">Our Vision</h5>
                                <p class="text-muted mb-0">To build a world class technology support company that exceeds the expectations of our clients while delivering exceptional values to all our stakeholders.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                        <div class="card features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-airplay rounded h3 mb-0"></i> */}
                                <FaRocket className='h3 fa-solid fa-rocket'/>
                            </div>

                            <div class="card-body">
                                <h5 class="text-dark">Our Mission</h5>
                                <p class="text-muted mb-0">To deliver exceptional ATM services to banks and IADS using state-of-the-art technologies delivered by passionate, professional and motivated workforce</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                        <div class="card features feature-primary feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-image-check rounded h3 mb-0"></i> */}
                                <FaStar className='h3 fa-solid fa-star'/>
                            </div>

                            <div class="card-body">
                                <h5 class="text-dark">Our Commitment</h5>
                                <p class="text-muted mb-0">We are a team of trained ATM specialists formed to deliver cutting edge sales and support services to banks in Africa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-end mb-4 pb-4">
                    <div class="col-md-8">
                        <div class="section-title text-center text-md-start">
                            <h6 class="text-primary">Services</h6>
                            <h4 class="title mb-4 black-text black-text">What we do ?</h4>
                            <p class="text-muted mb-0 para-desc">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div class="col-md-4 mt-4 mt-sm-0">
                        <div class="text-center text-md-end">
                            <a href="javascript:void(0)" class="text-primary h6">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 mt-4 pt-2">
                        <ul class="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link rounded active" id="webdeveloping" data-bs-toggle="pill" href="page-aboutus-two.html#developing" role="tab" aria-controls="developing" aria-selected="false">
                                    <div class="text-center py-1">
                                        <h6 class="mb-0">ATM Vault Opening</h6>
                                    </div>
                                </a>
                            </li>
                            
                            <li class="nav-item mt-2">
                                <a class="nav-link rounded" id="database" data-bs-toggle="pill" href="page-aboutus-two.html#data-analise" role="tab" aria-controls="data-analise" aria-selected="false">
                                    <div class="text-center py-1">
                                        <h6 class="mb-0">Maintenance Services</h6>
                                    </div>
                                </a>
                            </li>
                            
                            <li class="nav-item mt-2">
                                <a class="nav-link rounded" id="server" data-bs-toggle="pill" href="page-aboutus-two.html#security" role="tab" aria-controls="security" aria-selected="false">
                                    <div class="text-center py-1">
                                        <h6 class="mb-0">Logistic / Haulage Support</h6>
                                    </div>
                                </a>
                            </li>
                            
                            <li class="nav-item mt-2">
                                <a class="nav-link rounded" id="webdesigning" data-bs-toggle="pill" href="page-aboutus-two.html#designing" role="tab" aria-controls="designing" aria-selected="false">
                                    <div class="text-center py-1">
                                        <h6 class="mb-0">Software Deployment</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-8 col-12 mt-4 pt-2">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active p-4 rounded shadow" id="developing" role="tabpanel" aria-labelledby="webdeveloping">
                                <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1708256677/dycomnet/vaults_gjleep.png" class="img-fluid rounded shadow" alt="" />
                                <div class="mt-4">
                                    <p class="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="javascript:void(0)" class="text-primary">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                            
                            <div class="tab-pane fade p-4 rounded shadow" id="data-analise" role="tabpanel" aria-labelledby="database">
                                <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440415/dycomnet/image-019_bm30h1.jpg" class="img-fluid rounded shadow" alt="" />
                                <div class="mt-4">
                                    <p class="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="javascript:void(0)" class="text-primary">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>

                            <div class="tab-pane fade p-4 rounded shadow" id="security" role="tabpanel" aria-labelledby="server">
                                <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1704440432/dycomnet/image-039_u1jmxo.jpg" class="img-fluid rounded shadow" alt="" />
                                <div class="mt-4">
                                    <p class="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="javascript:void(0)" class="text-primary">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                            
                            <div class="tab-pane fade p-4 rounded shadow" id="designing" role="tabpanel" aria-labelledby="webdesigning">
                                <img src="assets/images/work/12.jpg" class="img-fluid rounded shadow" alt="" />
                                <div class="mt-4">
                                    <p class="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <a href="javascript:void(0)" class="text-primary">See More <i class="uil uil-angle-right-b align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        {/* <section class="section bg-light pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="video-solution-cta position-relative" style={{zIndex: 1}}>
                            <div class="position-relative">
                                <img src="assets/images/cta-bg.jpg" class="img-fluid rounded-md shadow-lg" alt="" />
                                <div class="play-icon">
                                    <a href="page-aboutus-two.html#!" data-type="youtube" data-id="yba7hPeTSjk" class="play-btn lightbox border-0">
                                        <i class="mdi mdi-play text-primary rounded-circle shadow-lg"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="content mt-md-4 pt-md-2">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-center">
                                        <div class="row align-items-center">
                                            <div class="col-md-6 mt-4 pt-2">
                                                <div class="section-title text-md-start">
                                                    <h6 class="text-white-50">Team</h6>
                                                    <h4 class="title text-white title-dark mb-0">Meet Experience <br/> Team Member</h4>
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-12 mt-4 pt-md-2">
                                                <div class="section-title text-md-start">
                                                    <p class="text-white-50 para-desc">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <a href="javascript:void(0)" class="text-white title-dark">Read More <i class="uil uil-angle-right-b align-middle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feature-posts-placeholder bg-primary bg-gradient"></div>
            </div>
        </section> */}
        
      
    </div>
  )
}
