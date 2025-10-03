import React from 'react'

const Education = () => {
  return (
    <div className='container p-3 mt-4'>
      <div className="row p-3">
        <div className="col px-4">
          <img src="images\education.svg" alt="" style={{width:'70%'}}/>
        </div>
        <div className="col mt-4">
          <h1 className='fs-2'>Free and open market education</h1>
          <p className='mt-4 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{ textDecoration: "none", fontWeight:'500' }}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className='mt-4 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{ textDecoration: "none", fontWeight:'500'}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education;