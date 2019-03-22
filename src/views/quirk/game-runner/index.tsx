import * as React from 'react';
import Renderer from './pixi-renderer';

class GameRunner extends React.Component<{}> {
  private ref: React.RefObject<HTMLCanvasElement> = React.createRef();

  public render() {
    return (
      <>
        <canvas ref={this.ref} />
        <Renderer canvas={this.ref} />
      </>
    );
  }
}

export default GameRunner;
