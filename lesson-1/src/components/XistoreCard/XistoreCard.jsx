import React from 'react';
// import { RabotaButton } from "./RabotaButton"


export class XistoreCard extends React.Component {
  render() {
    const { image, title, description, text, price, oldPrice } = this.props;

    return (
      <div className="xistore-wrapper">
        <div className="xistore-icons">
          <div className="xistore-like"></div>
          <div className="xistore-basket"></div>
        </div>
        <img
          className="xistore-img"
          src={image}
          alt="Колонка"
          style={{
            width: "200px",
            height: "200px",
            margin: "0 auto",
            paddingTop: "18px",
          }}
        />
        <p className="xistore-title">{`${title}`}</p>
        <p className="xistore-description">{description}</p>

        <div>
          <div className="xistore-info">
            <p className="xistore-text">{text}</p>
            <p className="xistore-price">{price}</p>
            <p className="xistore-oldprice">{oldPrice}</p>
          </div>
        </div>
      </div>
    );
  }
}

