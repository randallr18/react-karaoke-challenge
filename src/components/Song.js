import React from 'react';

const Song = (props) => {

  // function submitHandler(event) {
  //     console.log("hello")
  //   event.preventDefault();
  //
  // }

  return (
    <tr className="song">
      <td>{props.title}</td>
      <td>{props.singer}</td>
      <td>{props.plays}</td>
      <td><button onClick={ event => (props.handler(props.title, props.lyrics, props.id, event))}>Play</button></td>
    </tr>
  )
}

export default Song;
