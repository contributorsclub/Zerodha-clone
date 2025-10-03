import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container support'>
      <div className="row">
        <h4 className='mb-3 mt-4'>To create a ticket, select a relevant topic</h4>
        <div className="col mt-4 lh-lg">
          <h4 className='mb-4 '><i class="fa-solid fa-plus"></i> Account Opening</h4>
          <a href="">Online Account Opening</a><br />
          <a href="">Offline Account Opening</a><br />
          <a href="">Company, Partnership and HUF Account <br />Opening</a><br />
          <a href="">NRI Account Opening</a><br />
          <a href="">Charges at Zerodha</a><br />
          <a href="">Zerodha IDFC First Bank 3-in-1 Account</a><br />
          <a href="">Getting Started</a>
        </div>
        <div className="col mt-4 lh-lg">
        <h4 className='mb-4 '><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
          <a href="">Login Credentials</a>
          <a href="">Account modification and segment addition</a><br />
          <a href="">CMR & DP ID</a><br />
          <a href="">Your Profile<br />Opening</a><br />
          <a href="">Nomination</a><br />
          <a href="">Transfer and conversion of shares</a><br />
        </div>
        <div className="col mt-4 lh-lg">
        <h4 className='mb-4 '><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
          <a href="">Trading FAQs</a>
          <a href="">Kite</a><br />
          <a href="">Margins</a><br />
          <a href="">Product and order types</a><br />
          <a href="">Corporate actions</a><br />
          <a href="">Kite features</a><br />
        </div>
      </div>
      <div className="row">
      <div className="col mt-4 lh-lg">
          <h4 className='mb-4 '><i class="fa-solid fa-wallet"></i> Funds</h4>
          <a href="">Fund withdrawal</a><br />
          <a href="">Adding funds</a><br />
          <a href="">Adding bank accounts</a><br />
          <a href="">eMandates</a><br />
        </div>
        <div className="col mt-4 lh-lg">
        <h4 className='mb-4 '><i class="fa-regular fa-circle"></i> Console</h4>
          <a href="">IPO</a>
          <a href="">Portfolio</a><br />
          <a href="">Funds statement</a><br />
          <a href="">Profile</a><br />
          <a href="">Reports</a><br />
          <a href="">Referral program</a><br />
        </div>
        <div className="col mt-4 lh-lg">
        <h4 className='mb-4 '><i class="fa-solid fa-rupee-sign"></i> Coin</h4>
          <a href="">Understanding mutual funds and Coin</a>
          <a href="">Coin app</a><br />
          <a href="">Coin web</a><br />
          <a href="">Transactions and reports</a><br />
          <a href="">National Pension Scheme (NPS)</a><br />
        </div>
      </div>
    </div>
  )
}

export default CreateTicket;