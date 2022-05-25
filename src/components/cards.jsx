import React from 'react'
import Imgaes from './Imgaes'
function cards(props) {
  return (
      <>
      
    <div className='cards'>
    <div className='card'>
      <Imgaes imgsrc={props.imgsrc }/>
      <div className='"card__info'>
        <span className='card__category'>{props.title}</span>
        <h3 className='="card__title'>{props.sname}</h3>
        <a href={props.link} target="_blank">
          <button>watch Now</button>
        </a>
      </div>
    </div>
  </div>
  </>
  )
    
}

export default cards