import React from 'react';

export class RabotaButton extends React.Component {
  render() {
    const { hoverColor, action } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: hoverColor,
          width: "115px",
          height: "32px",
          color: "white",
          fontSize: "14px",
          marginRight: "450px",
        }}
      >
        <p>{action}</p>
      </div>
    );
  }
}
