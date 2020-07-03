import React from 'react';
import './Business.css';


class Business extends React.Component {
    render() {
        return (
            <div className="Business">
  <div className="image-container">
    <img src={business.imageSrc} alt={business.name}/>
  </div>
        <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.state + ' ' + business.zipCode}</p>
    </div>
    <div className="Business-reviews">
        <h3>{business.category}</h3>
      <h3 className="rating">{business.rating}</h3>
        <p>{business.reviewCount}</p>
    </div>
  </div>
</div>
        );
    }
};

export default Business;