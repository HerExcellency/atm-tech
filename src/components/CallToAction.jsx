import React from 'react'
import ContactButton from './ContactButton'
import '../css/calltoaction.css'

export default function CallToAction() {
  return (
    <div className='action'>
        <div className="call-to-action borderRadius" style={{color: '#fff'}}>
      <h1 className="largeh1">Have any questions?<br/> Don’t hesitate to reach us</h1>
      <ContactButton />
      
    </div>
    </div>
  )
}
