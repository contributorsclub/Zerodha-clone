import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col text-center mt-3">
          <img
            src="images\zerodhaFundhouse.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p className="mt-4 mb-5 text-muted">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
          <img
            src="images\streakLogo.png"
            alt=""
            style={{ width: "40%" }}
            className="mt-4"
          />
          <p className="mt-4 mb-5 text-muted">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col text-center mt-3">
          <img
            src="images\sensibullLogo.svg"
            alt=""
            style={{ width: "60%" }}
            className="mt-2"
          />
          <p className="mt-4 mb-5 text-muted">
            Systematic trading platform that <br />
            allows you to create and backtest <br />
            stratergies without coding.
          </p>

          <img
            src="images\smallcaseLogo.png"
            alt=""
            style={{ width: "60%" }}
            className="mt-4"
          />
          <p className="mt-4 mb-5 text-muted">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col text-center mt-3">
          <img
            src="images\tijori.png"
            alt=""
            style={{ width: "40%" }}
            className="mt-1"
          />
          <p className="mt-2 mb-5 text-muted">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
          <img
            src="images\ditto.png"
            alt=""
            style={{ width: "40%" }}
            className="mt-3 mb-2"
          />
          <p className="mt-4 mb-5 text-muted">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
