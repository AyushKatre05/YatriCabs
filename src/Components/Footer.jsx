import React from 'react';
import footerimg from '../Image/logo.png';
import { FaArrowRight } from "react-icons/fa";
import '../style/footer.css';

export default function Footer() {
  return (
    <div>
      <div className='footer_container'>
        <div className='footer_logo'>
          <img src={footerimg} alt="Logo" />
        </div>
        <div className='footer_links'>
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>News</div>
          <div>Contact</div>
          <div>Privacy Policy</div>
        </div>
        <div className='footer_newsletter'>
          <div>Newsletter</div>
          <div className='newsletter_input'>
            <input type="text" placeholder='Email' className='input_footer' />
            <div className='button_next'>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className='footer_copyright'>All Copyrights are reserved by YATRI CABS</div>
      </div>
    </div>
  );
}
