import React from 'react'
import Adata from './Adata';
import Cards from './cards';
function amazon() {
  return (
    Adata.map((val,index)=>{
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

export default amazon;