import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songs: [],
    searchSongs: [],
    currentSong : '',
    lyrics: ''
  }

  provideLyrics = (song, lyrics, event) => {
    event.preventDefault();
    this.setState({
      currentSong: song,
      lyrics: lyrics
    })
  }

  filterSongs = (searchTerm) => {
    const filteredArray = this.state.songs.filter(song => {let lowerSong = song.title.toLowerCase();
      let lowerSearch = searchTerm.toLowerCase()
    if(lowerSong.indexOf(lowerSearch) > -1) {
      return true
    } else {
      return false
    }})
    
    this.setState({
      searchSongs: filteredArray
    })
  }


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSongs={searchTerm => this.filterSongs(searchTerm)}/>
          <SongList songs={this.state.searchSongs} handler={this.provideLyrics} />
        </div>
          <KaraokeDisplay title={this.state.song} lyrics={this.state.lyrics}/>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://192.168.3.119:3000/users/13/songs")
    .then(data => data.json())
    .then(songs => this.setState({
      songs: songs,
      searchSongs: songs
    }))
  }
}

/*{this.state.songs.map(song => <KaraokeDisplay lyrics={songs.lyrics} title={song.title}/>)}*/

export default KaraokeContainer;
