import React from 'react'

const Awards = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='../images/largestBroker.svg' alt="" />
        </div>
        <div className='col-6 p-5'>
          <h1 className='mt-3'>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million zerodha clients contribute to pver 15% of all retail order volumes in India by trading and investing in: </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government security</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="images\pressLogos.png" alt="" style={{width:'90%'}} />
        </div>
      </div>
    </div>
  )
}

export default Awards;