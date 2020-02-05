import React, { useContext } from 'react';
import QuirkContext from '../../quirk.context';

export default function RunButton() {
  const context = useContext(QuirkContext);

  function handleClick() {
    console.log('Button Clicked');
  }
  return <button onClick={handleClick}>Run</button>;
}
