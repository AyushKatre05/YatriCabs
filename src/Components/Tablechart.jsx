import React from 'react'
import '../style/table.css'
export default function Tablechart() {

    const data =[
        {
            id: 1,
            name: 'CAR TYPE',
            c1:'AC Sedans',
            c2:'AC Hatchbacks',
            c3:'AC SUV '
        },
        {
            id: 2,
            name: 'MODEL INCLUDES',
            c1: 'Etios, Amaze, Dzire etc.',
            c2: 'Wagon R, Celerio, Micra etc.',
            c3: 'Ertiga, Xylo etc. '
        },
        {
            id: 3,
            name: 'PASSENGERS',
            c1: '4 Pax',
            c2: '4 Pax',
            c3: '6-7 Pax'
        },
        {
            id: 4,
            name: 'IDEAL FOR',
            c1: 'Comfortable trips with small families',
            c2: 'Budget trips over short distances',
            c3: 'Premium trips with large families'
        },
        {
            id: 5,
            name: 'FARE',
            c1: 'Rs.11/KM',
            c2: 'Rs.11/KM',
            c3: 'Rs.13/KM'
        },

    ]

  return (
    <div className='table'>
      <div className='table_container'>
        {data.map((item) => (
          <div key={item.id} className='table_item'>
                <div>{item.name}</div>
                <div>

                <p>{item.c1}</p>
                <p>{item.c2}</p>
                <p>{item.c3}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}
