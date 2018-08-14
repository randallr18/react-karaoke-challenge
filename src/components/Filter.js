import React, { Component } from 'react';

class Filter extends Component {
  state = {
    searchInput: ''
  }

  updateSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    this.props.filterSongs(event.target.value)

  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" name="searchBar" value={this.state.searchInput} onChange={this.updateSearch} />
      </div>
    );
  }
}

export default Filter;
