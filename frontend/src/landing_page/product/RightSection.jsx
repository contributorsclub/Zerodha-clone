import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
  className,
}) => {
  return (
  <div className="container">
      <div className="row p-5">
        <div className="col p-5" style={{marginRight:'120px', marginTop:'60px'}}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col px-5">
          <img src={imageURL} alt="" className={className}/>
        </div>
      </div>
    </div>
  )
};

export default RightSection;
