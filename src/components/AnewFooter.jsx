import React from 'react';
import { FaAngellist, FaAngleDoubleRight, FaAngleRight, FaEnvelopeSquare, FaFacebook, FaFacebookF, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';


export default function AnewFooter() {
  return (
    <div>
      
        <footer className="footer">    
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2 footer-logo">
                                    <a href="index-blockchain.html#" className="logo-footer">
                                        <img src="//res.cloudinary.com/ijeomaonuaju/image/upload/v1707665457/dycomnet/dycomnetWhit_bxgfyl.png" height="24" alt=""/>
                                    </a>
                                    <p className="mt-4">We are a multi vendor ATM support company driven by passion to deliver quality sales and support services to financial service providers in Africa.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item mb-0"><a href="/" target="_blank" className="rounded"><FaFacebookF title="facebook"/></a></li>
                                        <li className="list-inline-item mb-0"><a href="/" target="_blank" className="rounded"><FaInstagramSquare title="instagram"/></a></li>
                                        <li className="list-inline-item mb-0"><a href="/" target="_blank" className="rounded"><FaTwitterSquare title="twitter"/></a></li>
                                        <li className="list-inline-item mb-0"><a href="mailto/" className="rounded"><FaEnvelopeSquare title="email" /></a></li>
                                    </ul>
                                </div>
                        
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> About us</a></li>
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> Services</a></li>
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> Team</a></li>
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> Project</a></li>
                                    </ul>
                                </div>
                        
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> Terms of Services</a></li>
                                        <li><a href="javascript:void(0)" className="text-foot"><FaAngleRight  className="me-1"/> Privacy Policy</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head"></h5>
                                    <p className="mt-4">Send a mail today?</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="foot-subscribe mb-3">
                                                    <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <i data-feather="mail" className="fea icon-sm icons"></i>
                                                        <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="d-grid">
                                                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Send"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Dycomnet. Design with <i className="mdi mdi-heart text-danger"></i> by <a href="../../index.html" target="_blank" className="text-reset">HErExcellency</a>.</p>
                            </div>
                        </div>

                        {/* <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled text-sm-end mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/american-ex.png" className="avatar avatar-ex-sm" title="American Express" alt=""/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/discover.png" className="avatar avatar-ex-sm" title="Discover" alt=""/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/master-card.png" className="avatar avatar-ex-sm" title="Master Card" alt=""/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/paypal.png" className="avatar avatar-ex-sm" title="Paypal" alt=""/></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><img src="assets/images/payments/visa.png" className="avatar avatar-ex-sm" title="Visa" alt=""/></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>

      {/* cookies */}
        {/* <div className="card cookie-popup shadow rounded py-3 px-4">
            <p className="text-muted mb-0">This website uses cookies to provide you with a great user experience. By using it, you accept our <a href="../../index.html" target="_blank" className="text-success h6">use of cookies</a></p>
            <div className="cookie-popup-actions text-end">
                <button><i className="uil uil-times text-dark fs-4"></i></button>
            </div>
        </div> */}
        

        {/* <div className="offcanvas offcanvas-end shadow border-0" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header p-4 border-bottom">
                <h5 id="offcanvasRightLabel" className="mb-0">
                    <img src="assets/images/logo-dark.png" height="24" className="light-version" alt=""/>
                    <img src="assets/images/logo-light.png" height="24" className="dark-version" alt=""/>
                </h5>
                <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close"><i className="uil uil-times fs-4"></i></button>
            </div>
            <div className="offcanvas-body p-4">
                <div className="row">
                    <div className="col-12">
                        <img src="assets/images/contact.svg" className="img-fluid d-block mx-auto" alt=""/>
                        <div className="card border-0 mt-4" style={{zIndex: 1}}>
                            <div className="card-body p-0">
                                <h4 className="card-title text-center">Login</h4>  
                                <form className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="user" className="fea icon-sm icons"></i>
                                                    <input type="email" className="form-control ps-5" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i data-feather="key" className="fea icon-sm icons"></i>
                                                    <input type="password" className="form-control ps-5" placeholder="Password" required=""/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label" for="flexCheckDefault">Remember me</label>
                                                    </div>
                                                </div>
                                                <p className="forgot-pass mb-0"><a href="auth-cover-re-password.html" className="text-dark fw-bold">Forgot password ?</a></p>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <a href="auth-cover-signup.html" className="text-dark fw-bold">Sign Up</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon social mb-0">
                    <li className="list-inline-item mb-0"><a href="https://1.envato.market/landrick" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="mailto:support@shreethemes.in" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="../../index.html" target="_blank" className="rounded"><i className="uil uil-globe align-middle" title="website"></i></a></li>
                </ul>
            </div>
        </div> */}

        {/* <a href="javascript:void(0)" className="card switcher-btn shadow-md text-primary z-index-1 d-md-inline-flex d-none" data-bs-toggle="offcanvas" data-bs-target="#switcher-sidebar">
            <i className="mdi mdi-cog mdi-24px mdi-spin align-middle"></i>
        </a> */}

        {/* <div className="offcanvas offcanvas-start shadow border-0" tabindex="-1" id="switcher-sidebar" aria-labelledby="offcanvasLeftLabel">
            <div className="offcanvas-header p-4 border-bottom">
                <h5 id="offcanvasLeftLabel" className="mb-0">
                    <img src="assets/images/logo-dark.png" height="24" className="light-version" alt=""/>
                    <img src="assets/images/logo-light.png" height="24" className="dark-version" alt=""/>
                </h5>
                <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close"><i className="uil uil-times fs-4"></i></button>
            </div>
            <div className="offcanvas-body p-4 pb-0">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h6 className="fw-bold">Select your color</h6>
                            <ul className="pattern mb-0 mt-3">
                                <li>
                                    <a className="color-list rounded color1" href="javascript: void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Primary" onclick="setColorPrimary()"></a>
                                </li>
                                <li>
                                    <a className="color-list rounded color2" href="javascript: void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Green" onclick="setColor('green')"></a>
                                </li>
                                <li>
                                    <a className="color-list rounded color3" href="javascript: void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Yellow" onclick="setColor('yellow')"></a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center mt-4 pt-4 border-top">
                            <h6 className="fw-bold">Theme Options</h6>

                            <ul className="text-center style-switcher list-unstyled mt-4">
                                <li className="d-grid"><a href="javascript:void(0)" className="rtl-version t-rtl-light" onclick="setTheme('style-rtl')"><img src="assets/images/demos/rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">RTL Version</span></a></li>
                                    <li className="d-grid"><a href="javascript:void(0)" className="ltr-version t-ltr-light" onclick="setTheme('style')"><img src="assets/images/demos/ltr.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">LTR Version</span></a></li>
                                    <li className="d-grid"><a href="javascript:void(0)" className="dark-rtl-version t-rtl-dark" onclick="setTheme('style-dark-rtl')"><img src="assets/images/demos/dark-rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">RTL Version</span></a></li>
                                    <li className="d-grid"><a href="javascript:void(0)" className="dark-ltr-version t-ltr-dark" onclick="setTheme('style-dark')"><img src="assets/images/demos/dark.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">LTR Version</span></a></li>
                                    <li className="d-grid"><a href="javascript:void(0)" className="dark-version t-dark mt-4" onclick="setTheme('style-dark')"><img src="assets/images/demos/dark.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">Dark Version</span></a></li>
                                    <li className="d-grid"><a href="javascript:void(0)" className="light-version t-light mt-4" onclick="setTheme('style')"><img src="assets/images/demos/ltr.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">Light Version</span></a></li>
                                <li className="d-grid"><a href="../dashboard/index.html" target="_blank" className="mt-4"><img src="assets/images/demos/admin.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{width: '240px'}} alt=""/><span className="text-dark fw-medium mt-3 d-block">Admin Dashboard</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer p-4 border-top text-center">
                <ul className="list-unstyled social-icon social mb-0">
                    <li className="list-inline-item mb-0"><a href="https://1.envato.market/landrick" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="mailto:support@shreethemes.in" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                    <li className="list-inline-item mb-0"><a href="../../index.html" target="_blank" className="rounded"><i className="uil uil-globe align-middle" title="website"></i></a></li>
                </ul>
            </div>
        </div> */}

        <a href="index-blockchain.html#" onclick="topFunction()" id="back-to-top" className="back-to-top fs-5"><i data-feather="arrow-up" className="fea icon-sm icons align-middle"></i></a>
        {/* <!-- Back to top --> */}

        
    </div>
  )};