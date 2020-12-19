import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.updateFunction(this.props.id);
  }

  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
