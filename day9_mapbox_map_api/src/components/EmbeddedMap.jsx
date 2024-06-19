import React from 'react'

const EmbeddedMap = () => {
  return (
    <div className='main-container' style={{ height: '100vh', width: '100%', marginTop:"0px", }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5022411024916!2d72.67608131135245!3d23.04204157907313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87177278bbe1%3A0xa60363305159da02!2sStroke%20Infotech%20-%20MERN%20%26%20MEAN%20Stack%20Development%20Company!5e0!3m2!1sen!2sin!4v1718785622452!5m2!1sen!2sin"
        width="100%"
        style={{height:"100vh",border:"0", margin:"0", padding:"0", display:"flex"}}
        
        allowfullscreen="true"
        title='Google Embedded Map'
        loading="lazy"  
        referrerpolicy="no-referrer-when-downgrade">


      </iframe>
    </div>
  )
}

export default EmbeddedMap