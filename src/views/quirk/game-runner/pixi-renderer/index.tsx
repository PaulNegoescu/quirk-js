import * as React from 'react';

import { Stage } from '@inlet/react-pixi';
import { Quirk } from '../game-objects/quirk/quirk.component';
import { Brick } from '../game-objects/brick/brick.component';

class Renderer extends React.Component {
  public render() {
    return (
      <Stage>
        <Quirk></Quirk>
        <Brick x={245} y={100}></Brick>
        <Brick x={245} y={150}></Brick>
        <Brick x={245} y={200}></Brick>
        <Brick x={245} y={250}></Brick>
        <Brick x={245} y={300}></Brick>
        <Brick x={200} y={300}></Brick>
        <Brick x={150} y={300}></Brick>
        <Brick x={100} y={300}></Brick>
        <Brick x={50} y={300}></Brick>
        <Brick x={0} y={300}></Brick>
      </Stage>
    );
  }
}

export default Renderer;
