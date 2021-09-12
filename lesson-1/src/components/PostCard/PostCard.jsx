import React from 'react';
import { PostButton } from "./PostButton"


export class PostCard extends React.Component {
  render() {
    const { name, education, post, avatarUrl, time, border } = this.props;

    return (
      <div className="facebook-wrapper">
        <img className="facebook-img" src={avatarUrl} alt="Serik" />
        <div className="facebook-info">
          <div className="facebook-text">
            <p className="facebook-name">{`${name}`}</p>
            <p className="facebook-border">{`${border}`}</p>
            <p className="facebook-education">{`${education}`}</p>
          </div>
          <p className="facebook-post">{post}</p>
          <div className="facebook-button">
            <PostButton hoverColor={"none"} description={"Like"} />
            <p className="facebook-border">{`${border}`}</p>
            <PostButton hoverColor={"none"} description={"Reply"} />
            <p className="facebook-border">{`${border}`}</p>
            <div className="facebook-time">{time}</div>
          </div>
        </div>
      </div>
    );
  }
}

