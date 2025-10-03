import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  className,
}) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col p-5">
          <img src={imageURL} alt="" className={className}/>
        </div>
        <div className="col p-5" style={{marginLeft:'120px', marginTop:'80px'}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} className="" style={{marginLeft:'20%'}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="images\appStoreBadge.svg" alt="" style={{marginLeft:'9%'}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
