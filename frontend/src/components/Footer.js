import React from 'react'
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-accent'>
      <div className='flex footer-container'>
        <div className='footer-block'>
          <h4 className='fs-300'>OM OSS</h4>
          <div className='block-content'>
            <p>Om återbruket.se</p>
            <p>Användarvillkor</p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className='footer-block'>
          <h4 className='fs-300'>KONTAKTA OSS</h4>
          <div className='block-content'>
            <p>Återbruket.se</p>
            <p>Kungsgatan 20</p>
            <p>750 32 Uppsala</p>
            <p>info@aterbruket.se</p>
          </div>
        </div>
        <div className='footer-block'>
          <h4 className='fs-300'>SOCIALA MEDIER</h4>
          <div className='flex block-content media-icons'>
            <FaInstagram size="32px" />
            <FaFacebook size="32px" />
            <FaPinterest size="32px"/>
          </div> 
        </div>
      </div>
    </footer>
  )
}

export default Footer