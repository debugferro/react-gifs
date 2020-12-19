import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((data) => {
      return <Gif id={data.id} key={data.id} updateFunction={this.props.updateFunction} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
