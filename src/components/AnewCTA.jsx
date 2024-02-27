import React from 'react'

export default function AnewCTA() {
  return (
    <div>
        <section className="section pb-0" style={{background: "url('assets/images/crypto/bg.jpg') center;"}}>
            <div className="bg-overlay bg-primary bg-gradient" style={{opacity: 0.7}}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white title-dark mb-4">We are here to serve you. Talk to us now</h4>
                            <p className="text-white-50 para-dark para-desc mx-auto">Whether you're expanding, upgrading, or just starting out, we're your partner in navigating the future of banking and Fintech services. Let's create a seamless, secure, and superior experience together. Reach out today and find out how we can help your business thrive in the digital age.</p>
                        </div>
                        <div className="subcribe-form mt-4">
                            <form>
                                <div className="mb-2">
                                    <input type="email" id="email" name="email" className="rounded-pill border" placeholder="E-mail :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Send Mail</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4 pt-2">
                            <img src="assets/images/crypto/cta.png" className="img-fluid d-block mx-auto" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}
