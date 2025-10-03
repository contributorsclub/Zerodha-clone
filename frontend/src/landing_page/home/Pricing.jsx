import React from "react";

const Pricing = () => {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-5 px-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="" style={{ textDecoration: "none", fontWeight:'500'}}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col">
              <img
                src="images/rszero.png"
                alt=""
                style={{ width: "50%" }}
                className="mt-4"
              />
              <p style={{ fontSize: "12px" }} className="px-1">
                Free account opening
              </p>
            </div>
            <div className="col">
            <img
                src="images/rszero.png"
                alt=""
                style={{ width: "50%" }}
                className="mt-4"
              />
              <p style={{ fontSize: "12px" }} className="px-1">
              Free equity delivery <br />
              and direct mutual funds
              </p>
            </div>
            <div className="col">
            <img
                src="images/rstwenty.png"
                alt=""
                style={{ width: "50%" }}
                className="mt-4 "
              />
              <p style={{ fontSize: "12px" }} className="px-3">
              Intraday and
              F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
