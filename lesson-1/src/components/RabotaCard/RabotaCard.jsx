import React from 'react';
import { RabotaButton } from "./RabotaButton"


export class RabotaCard extends React.Component {
  render() {
    const {
      title,
      company,
      city,
      date,
      description1,
      description2,
      description3,
    } = this.props;

    return (
      <div className="rabota-wrapper">
        <h2 className="rabota-title">{title}</h2>
        <div className="rabota-info">
          <p className="rabota-company">{`${company}`}</p>
          <div className="rabota-checked"></div>
        </div>
        <p className="rabota-city">{`${city}`}</p>
        <p className="rabota-description">{description1}</p>
        <p className="rabota-description">{description2}</p>
        <p className="rabota-description">{description3}</p>
        <div className="rabota-button">
          <RabotaButton hoverColor={"#1e88e5"} action={"Откликнуться"} />
          <p className="rabota-date">{date}</p>
        </div>
      </div>
    );
  }
}

