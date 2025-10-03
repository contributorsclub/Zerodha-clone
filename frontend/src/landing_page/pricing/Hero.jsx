import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-4 mb-4">Charges</h1>
        <p className="fs-4 mb-5">List of all charges and taxes</p>
      </div>
      <div className="row mt-5">
        <div className="col text-center p-0">
          <img src="images\rszero.png" alt="" style={{width:'60%'}}/>
          <h1 className="mt-3 fs-2">Free equity delivery</h1>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col text-center p-0">
          <img src="images\rstwenty.png" alt="" style={{width:'60%'}}/>
          <h1 className="mt-3 fs-2">Intraday and F&O trades</h1>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, <br /> are absolutely currency, and
            commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center p-0">
          <img src="images\rszero.png" alt="" style={{width:'60%'}}/>
          <h1 className="mt-3 fs-2">Free direct MF</h1>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP  <br />charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
