import React from 'react'
import Sdata from './sdata';
import Cards from './cards';
function Netflix() {
  return (
    Sdata.map((val,index)=>{
        return(
          <Cards 
                  key={val.id}
                  imgsrc={val.imgsrc} 
                  title={val.title} 
                  sname={val.sname} 
                  link={val.link}
          />
        )
      })
  )
}

export default Netflix;