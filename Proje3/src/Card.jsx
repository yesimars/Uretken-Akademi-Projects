import React from 'react'
import ImgThumbnail from './ImgThumbnail'


function Card({ title, imgSrc, imgAlt, children, ...rest }) {
  const cardStyle = {
    padding: "10px",
    
    

  }
  return (
    <div style={cardStyle}>
      
      <ImgThumbnail imgSrc={imgSrc} alt={imgAlt} />
      <h2>{title}</h2>
      {rest.dataId}
      <hr />
      {children}

    </div>
    
  )
  
}

export default Card