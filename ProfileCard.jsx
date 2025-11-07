import React, { Component } from "react";

class ProfileCard extends Component {
  render() {
    const { image, name, age, occupation } = this.props;
    return (
      <div className="single-card">
        <div className="img">
          <img src={image} alt={name} />
        </div>
        <h6>Name: {name}</h6>
        <h6>Age: {age}</h6>
        <h6>Occupation: {occupation}</h6>
      </div>
    );
  }
}

export default ProfileCard;
