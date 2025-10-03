import React from "react";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-4">
        <div className="col-5 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-5 mb-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-5 mb-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5 mb-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-5 mb-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7 p-5">
          <img src="images/ecosystem.png" alt="" style={{ width: "100%" }} />
          <div>
            <a href="" className="mx-5" style={{textDecoration:'none', fontWeight:'500'}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="" className="mx-5" style={{textDecoration:'none', fontWeight:'500'}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
