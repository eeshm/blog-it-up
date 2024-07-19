import React from 'react'
import Logo1 from '../../public/blogitup.png'


function Logo({width}) {
  return (
    <div >
      <img src={Logo1} alt="Logo" style={{width:150}} className='-mt-12' />;
    </div>
  )
}

export default Logo