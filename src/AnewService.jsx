import React from 'react'
import { FaCog, FaCogs, FaExchangeAlt, FaServer, FaShieldVirus, FaTruckMoving } from 'react-icons/fa'
import one from './photo/projects/image-018.jpg'
import two from './photo/projects/image-022.jpg'
import three from './photo/projects/image-029.jpg'
import four from './photo/projects/image-039.jpg'
import bg from './photo/projects/image-037.jpg'

export default function AnewService() {
  return (
    <div>
                
                
        <section class="bg-half-170 bg-light d-table w-100" style={{backgroundImage: `url(${bg})`}}>
            <div class="container">
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="pages-heading">
                            <h4 class="title mb-0"> Services </h4>
                        </div>
                    </div>
                </div>
                
                <div class="position-breadcrumb">
                    <nav aria-label="breadcrumb" class="d-inline-block">
                        <ul class="breadcrumb rounded shadow mb-0 px-4 py-2">
                            <li class="breadcrumb-item"><a href="index.html">Dycomnet</a></li>
                            <li class="breadcrumb-item"><a href="page-services.html#">Page</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Services</li>
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
                <div class="row">
                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-edit-alt h2 text-primary"></i> */}
                                <FaServer class="uil uil-edit-alt h2 text-primary" />
                            </div>

                            <div class="content mt-4">
                                <h5>Software Deployment</h5>
                                <p class="text-mutedly mb-0">Experience uninterrupted ATM operations with our software deployment service, ensuring your machines are fully operational and up-to-date with the latest software patches and features.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-vector-square h2 text-primary"></i> */}
                                <FaCog class="uil uil-vector-square h2 text-primary" />
                            </div>

                            <div class="content mt-4">
                                <h5>Maintenance Services</h5>
                                <p class="text-mutedly mb-0">Optimize your ATM performance with our comprehensive maintenance services, tailored to keep your machines running smoothly and efficiently.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-file-search-alt h2 text-primary"></i> */}
                                <FaTruckMoving class="uil uil-vector-square h2 text-primary"/>
                            </div>

                            <div class="content mt-4">
                                <h5>Logistics Support</h5>
                                <p class="text-mutedly mb-0">Efficiently relocate and install ATMs with our dedicated logistics support services, ensuring seamless deployment and setup.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-airplay h2 text-primary"></i> */}
                                <FaCogs class="uil uil-airplay h2 text-primary" />
                            </div>

                            <div class="content mt-4">
                                <h5>Repair Solutions</h5>
                                <p class="text-mutedly mb-0">Resolve component issues with our comprehensive repair solutions, ensuring optimal performance and longevity.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-calendar-alt h2 text-primary"></i> */}
                                <FaExchangeAlt  class="uil uil-calendar-alt h2 text-primary" />
                            </div>

                            <div class="content mt-4">
                                <h5>Buy-Back Program</h5>
                                <p class="text-mutedly mb-0"> Unlock value with our competitive repurchase offers, facilitating seamless upgrades and equipment refreshes.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5 pt-4">
                        <div class="features feature-primary">
                            <div class="image position-relative d-inline-block">
                                {/* <i class="uil uil-clock h2 text-primary"></i> */}
                                <FaShieldVirus class="uil uil-clock h2 text-primary" />
                            </div>

                            <div class="content mt-4">
                                <h5>Security Devices</h5>
                                <p class="text-mutedly mb-0">Ensure robust security with our advanced devices, safeguarding against potential threats and ensuring peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
       

        
        <section class="section bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">Our Latest Projects</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Begin your partnership with <span class="text-primary fw-bold">Dycomnet</span>, where we offer comprehensive solutions to enhance ATM operations, drive customer engagement, and ensure seamless connectivity.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <img src={one} class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                                <div class="content">
                                    <a href="portfolio-detail-one.html" class="title text-white d-block fw-bold">Deployment</a>
                                    <small class="text-white-50"></small>
                                </div>
                                <div class="client">
                                    <small class="user d-block"></small>
                                    <small class="date"></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <img src={two} class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                                <div class="content">
                                    <a href="portfolio-detail-one.html" class="title text-white d-block fw-bold"> Lobby to ATM kiosk</a>
                                    <small class="text-white-50">Conversion</small>
                                </div>
                                <div class="client">
                                    <small class="user d-block"> Kirikiri</small>
                                    <small class="date"> </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <img src={three} class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                                <div class="content">
                                    <a href="portfolio-detail-one.html" class="title text-white d-block fw-bold">STAGING AND CONSTRUCTION</a>
                                    <small class="text-white-50">STAGING AND CONSTRUCTION</small>
                                </div>
                                <div class="client">
                                    <small class="user d-block"> Onikan, Lagos</small>
                                    <small class="date">CUBICLE/CUSTOMERS’ PLATFORM</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card work-container work-primary work-modern position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <img src={four} class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                                <div class="content">
                                    <a href="portfolio-detail-one.html" class="title text-white d-block fw-bold">RELOCATION OF ATM AND KIOSK</a>
                                    <small class="text-white-50">CHEVRON MICROFINANCE BANK</small>
                                </div>
                                <div class="client">
                                    <small class="user d-block"> Lekki, Lagos</small>
                                    <small class="date"> Relocation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h4 class="title mb-4">See everything you need in one place.</h4>
                            <p class="text-muted para-desc mx-auto">Begin your partnership with <span class="text-primary fw-bold">Dycomnet</span>, where we offer comprehensive solutions to enhance ATM operations, drive customer engagement, and ensure seamless connectivity.</p>
                        
                            <div class="mt-4">
                                <a href="javascript:void(0)" class="btn btn-primary mt-2 me-2">Get Started Now</a>
                                {/* <a href="javascript:void(0)" class="btn btn-outline-primary mt-2">Free Trial</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      
    </div>
  )
}
