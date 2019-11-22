import * as React from 'react';

import { Stage } from '@inlet/react-pixi';
import { Quirk } from '../game-objects/quirk/quirk.component';
import { Brick } from '../game-objects/brick/brick.component';
import { obstacles } from '../../board.config';

class Renderer extends React.Component {
  public render() {
    return (
      <Stage>
        <Quirk></Quirk>
        {obstacles.map((obst, index) => (
          <Brick key={index} {...obst}></Brick>
        ))}
      </Stage>
    );
  }
}

export default Renderer;
