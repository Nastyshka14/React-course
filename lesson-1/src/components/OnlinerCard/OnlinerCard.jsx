import React from 'react';


export class OnlinerCard extends React.Component {
  render() {
    const { title, article, counter } = this.props;

    return (
      <div className="onliner-wrapper">
        <div className="onliner-info">
          <p className="onliner-article">{`${article}`}</p>

          <p className="onliner-counter">{`${counter}`}</p>
        </div>
        <h2 className="onliner-title">{title}</h2>
      </div>
    );
  }
}