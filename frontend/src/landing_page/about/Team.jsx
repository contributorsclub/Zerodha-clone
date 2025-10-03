import React from 'react'

const Team = () => {
  return (
    <div className='container p-5 mx-5'>
        <div className="row text-center mt-3">
            <h1>People</h1>
        </div>
        <div className='row mx-5 p-5' >
            <div className="col-5 mt-5 text-center">
                <img src="images/nithinKamath.jpg" alt="Nithin Kamath" className='rounded-circle ' style={{width:'85%'}}/>
                <h5 className='mt-3'>Nithin Kamath</h5>
                <p className='text-muted fw-semibold'>Founder, CEO</p>
            </div>
            <div className="col-7 mt-5 aboutlink">
                <p className='mt-5' style={{color:'#424242'}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p style={{color:'#424242'}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p style={{color:'#424242'}}>Playing basketball is his zen.</p>
                <p style={{color:'#424242'}}>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
            </div>
        </div>
        
    </div>
  )
}

export default Team;