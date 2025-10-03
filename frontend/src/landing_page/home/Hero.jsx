import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src="images/homeHero.png" alt="Hero page" className='mb-5'/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button className='p-1 btn btn-primary fs-5' style={{width: "15%", margin: "0 auto"}}>Sign up for free</button>
      </div>

    </div>
  )
}

export default Hero;