import React, { useContext } from 'react';
import QuirkContext from '../../../../shared/quirk.context';

export default function index() {
  function handleClick() {
    const context = useContext(QuirkContext);
    console.log('Button Clicked');
  }
  return <button onClick={handleClick}>Run</button>;
}
