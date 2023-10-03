import React from 'react'
import img from './Img/car.jpeg'
export default function CarItem(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h6 className="card-title m-0 p-0">{props.name}</h6>
          <p className="btn card-title border my-0 py-0 border-danger">{props.model}</p>
        </div>
        <div className="row">
          <div className='col-lg-6 col-md-6 col-6'><i className="fa-sharp fa-solid fa-people-group"></i> {props.people} People</div>
          <div className='col-lg-6 col-md-6 col-6'><i className="fa-solid fa-gas-pump"></i> {props.category}</div>
          <div className='col-lg-6 col-md-6 col-6 f-sm'><i className="fa-solid fa-recycle"></i> {props.mileage}km/1-liter</div>
          <div className='col-lg-6 col-md-6 col-6'><i className="fa-solid fa-shield-cat"></i> {props.gearbox}</div>
        </div>
        <div className="card-footer text-body-secondary">
          <p>{props.sales}</p>
        </div>
      </div>
    </div>
  )
}
