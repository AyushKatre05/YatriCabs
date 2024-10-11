import React from 'react'
import '../style/home.css'
import logo from '../Image/logo.png'
import phone from '../Image/phone.png'
import ravi from '../Image/ravi.png'
import background from '../Image/background.png'
import Form from '../Components/Form.jsx'
import group from '../Image/Group 17.png'
import Download from '../Components/Download.jsx'
export default function Home() {

  return (
    <>
      <div className='heading_navbar'>
        <div className='heading_container'>

          <img src={logo} alt="" />
          <img src={phone} alt="" className='heading_img' />
          <div>
            <img src={group} alt="" className='heading_img' />
            <img src={ravi} alt="" className='heading_img' />
          </div>
        </div>
      </div>
      <div className='homepage'  >
          <img src={background} alt="" />
        <div className='home_container'>
          <div className='heading_back'>
            
            <div className='heading'>
              India's {' '}
              <span              >
                Leading {'\n'} One-Way Inter-City
              </span> <span style={{letterSpacing:'0px'}}>Cab Service Provider</span>
            </div>
            <Form />
          </div>
          <div className='download'>
            <Download />
          </div>
        </div>

      </div>
    </>
  )
}
