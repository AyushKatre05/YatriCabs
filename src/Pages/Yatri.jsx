import React from 'react'
import car from '../Image/car.png'
import paid from '../Image/paid.png'
import vector from '../Image/Vector (1).png'
import vector1 from '../Image/Vector.png'
import people from '../Image/people.png'
import threetext from '../Image/retrunfare.png'
import '../style/yatri.css'
export default function Yatri() {

  const data= [
    {
      id: 1,
      image:vector,
      heading:'Fast response time',
      context:'Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.'
    },
    {
      id: 2,
      image:people,
      heading: 'Vast fleet',
      context:'We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement'      
    },
    {
      id: 3,
      image:vector1,
      heading: 'Easy to order',
      context:'Easily Book Cab Online with our website or call our customer support team.'      
    },
    {
      id: 4,
      image:paid,
      heading: 'Great tariffs',
      context:'Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental. '      
    },
  ]
  return (
    <div className='yatri'>
           <div className='table_img'>
           <img src={threetext} alt="" />
      </div>

      <div class="text_container">
  <h1>India's Premier Intercity and Local Taxi Services</h1>
  <p>
    At Yatri Cabs, we pride ourselves on being a top-tier online cab booking service, delivering reliable and premium intercity and local taxi services. With over a decade of experience, we have become the leading chauffeur-driven car rental company in India, renowned for our expansive coverage across the country.
  </p>
</div>


      <div className='heading_yatri_phones'>WHY  <span style={{ color: "rgba(33, 105, 0, 1)" }}> YATRI</span> ?</div>

      <div className='yatri_container'>
        <div className='yatri_img'>
          <img src={car} alt="" />
        </div>
        <div className='yatri_data'>
          <div className='heading_yatri_laptop'>WHY  <span style={{ color: "rgba(33, 105, 0, 1)" }}> YATRI</span> ?</div>
          <div className='yatri_items_container'>

          {data.map((item) => (
            <div key={item.id} className='yatri_item'>
              <img src={item.image} alt="" />
              <div className='yatri_context'>
              <div>{item.heading}</div>
              <div>{item.context}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}
