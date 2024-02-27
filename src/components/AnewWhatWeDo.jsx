
import React from 'react';
import { FaArrowRight, FaBus, FaBuyNLarge, FaCheckCircle, FaDeploydog, FaMoneyBill, FaRobot, FaServicestack, FaSwatchbook } from 'react-icons/fa';
import { FaScrewdriver } from 'react-icons/fa';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default function AnewWhatWeDo() {
  return (
    // <div>
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h4 class="title mb-4">What We Do</h4>
                            <h5 class="text-mutedly para-desc mx-auto mb-0">Fintech, Banking Equipments, Software</h5>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                <FaScrewdriver  className="rounded h3 mb-0 fa-solid fa-screwdriver-wrench" />
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">Maintenance Services</a>
                                <p className="text-mutedly mt-2">Upgrading ATMs for peak performance.</p>
                                <a href="javascript:void(0)" className="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" />
                                 </a>
                                <i class="uil uil-analytics full-img"></i>                    
                                </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-swatchbook rounded h3 mb-0"></i> */}
                                <FaServicestack className="rounded h3 mb-0 fa-solid "/>
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">Repair Services</a>
                                <p class="text-mutedly mt-2">Comprehensive ATM component repairs.</p>
                                <a href="javascript:void(0)" class="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                                <i class="uil uil-swatchbook full-img"></i>
                            </div>
                        </div>
                    </div>

                    


                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-file-contract-dollar rounded h3 mb-0"></i> */}
                                <FaDeploydog className="rounded h3 mb-0 fa-solid "/>
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">Software Deployment</a>
                                <p class="text-mutedly mt-2">Ensuring ATMs are fully operational</p>
                                <a href="javascript:void(0)" class="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                                <i class="uil uil-file-contract-dollar full-img"></i>
                            </div>
                        </div>
                    </div>
                                        
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-dashboard rounded h3 mb-0"></i> */}
                                <FaBus className="rounded h3 mb-0 fa-solid"/>
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">Logistic / Haulage Support</a>
                                <p class="text-mutedly mt-2">Efficient ATM relocation and installation</p>
                                <a href="javascript:void(0)" class="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                                <i class="uil uil-dashboard full-img"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-exchange rounded h3 mb-0"></i> */}
                                <FaMoneyBill className="rounded h3 mb-0 fa-solid"/>
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">Buy-Back Offers</a>
                                <p class="text-mutedly mt-2"> Competitive ATM repurchase offers.</p>
                                <a href="javascript:void(0)" class="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                                <i class="uil uil-exchange full-img"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="card border-0 features feature-primary feature-clean course-feature p-4 overflow-hidden shadow text-center">
                            <div class="icons text-center mx-auto">
                                {/* <i class="uil uil-lock-alt rounded h3 mb-0"></i> */}
                                <FaRobot className="uil uil-lock-alt rounded h3 mb-0 fa-solid" />
                            </div>
                            <div class="card-body p-0 mt-4">                                            
                                <a href="javascript:void(0)" class="title h5 text-darken">ATM Opening</a>
                                <p class="text-mutedly mt-2">Safe and trusted vault opening services.</p>
                                <a href="javascript:void(0)" class="read-more">Read More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                                <i class="uil uil-lock-alt full-img"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1707663098/dycomnet/177181_bhp8bz.jpg" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ms-lg-5">
                            <h4 class="title mb-4">Software Solutions and Fintech Innovations</h4>
                            <p class="text-mutedly">Our cutting-edge software solutions are designed to propel the fintech industry forward, ensuring secure, efficient, and user-friendly operations. From OS migrations to intelligent surveillance, we offer:</p>
                            <ul class="list-unstyled text-mutedly">
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Windows 10 Migration</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Intelligent Camera Systems</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Archiving Solutions</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Multilingual Support</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Channel Optimization</li>
                            </ul>
                            <a href="javascript:void(0)" class="mt-3 h6 text-primary">Find Out More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title me-lg-5">
                            <h4 class="title mb-4">Hardware Solutions and Offerings</h4>
                            <p class="text-mutedly">Our comprehensive hardware services underscore our commitment to operational excellence in the ATM sector. We provide:</p>
                            <ul class="list-unstyled text-mutedly">
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>ATM Supply & Maintenance</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Cassette Solutions</li>
                                <li class="mb-1">
                                    <span className="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>
                                    Restoration and Refurbishment</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Logistics and Security</li>
                                <li class="mb-1"><span class="text-primary h5 me-2"><FaCheckCircle className="uil uil-check-circle align-middle"/></span>Buy-Back and Recycling</li>
                            </ul>
                            <a href="javascript:void(0)" class="mt-3 h6 text-primary">Find Out More <FaArrowRight className="fa-solid fa-arrow-right" /></a>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-6 order-1 order-md-2">
                        <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1707663145/dycomnet/55818_u07szg.jpg" class="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
      
    // </div>
  )
}
