import React from 'react'

function ImgThumbnail({ imgSrc, imgAlt }) {
  const imgStyle = {
    borderRadius: "8px",
    border: "1px solid #bdc3c7",
    maxWidth: "100%",
    boxSizing: "border-box",
    marginBottom: "5px",
    
    
    
  }

  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      style={imgStyle}
    />
  )
}

export default ImgThumbnail