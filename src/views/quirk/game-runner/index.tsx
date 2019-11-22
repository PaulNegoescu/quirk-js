import * as React from 'react';
import Renderer from './pixi-renderer';
import RunButton from './run-button';

class GameRunner extends React.Component<{}> {
  public render() {
    return (
      <>
        <RunButton />
        <Renderer />
      </>
    );
  }
}

export default GameRunner;
