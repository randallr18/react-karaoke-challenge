import React from 'react';
import Song from './Song'

const SongList = (props) => {
  console.log(props.songs)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => < Song title={song.title} singer={song.singer} lyrics={song.lyrics} plays={song.plays} handler={props.handler} id={song.id} />)}

      </tbody>
    </table>
  )
}

export default SongList;
