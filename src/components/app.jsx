import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import Search from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "JTghlLg0d1BpZvbQlG"
    };
  }


  search = (query) => {
    giphy('wlfMTs6p3uoQKUtR3o9UCo5gPA98zX1l').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  updateSelected = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFunction={this.updateSelected} />
        </div>
      </div>

    );
  }
}

export default App;
