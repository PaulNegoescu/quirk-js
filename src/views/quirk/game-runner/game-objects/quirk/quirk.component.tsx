import React from 'react';

import { Sprite, _ReactPixi } from '@inlet/react-pixi';

export class Quirk extends React.Component {
  public state = {
    x: 150,
    y: 150,
  };

  private movementsToState = {
    x: (value: number) => this.setState({ x: value }),
    y: (value: number) => this.setState({ y: value }),
  };

  constructor(props: any) {
    super(props);

    (window as any).moveUp = this.moveUp.bind(this);
    (window as any).moveDown = this.moveDown.bind(this);
    (window as any).moveLeft = this.moveLeft.bind(this);
    (window as any).moveRight = this.moveRight.bind(this);
  }

  public moveLeft = (value: number = 25) => {
    this.move('x', this.state.x - value);
  };

  public moveUp = (value: number = 25) => {
    this.move('y', this.state.y - value);
  };

  public moveDown = (value: number = 25) => {
    this.move('y', this.state.y + value);
  };

  public moveRight = (value: number = 25) => {
    this.move('x', this.state.x + value);
  };

  private move(direction: 'x' | 'y', coordValue: number) {
    if (!this.canMove(direction, coordValue)) {
      return;
    }

    this.movementsToState[direction](coordValue);
  }

  private canMove(direction: 'x' | 'y', value: number) {
    return true;
  }

  public render() {
    return (
      <>
        <Sprite
          {...this.state}
          image="https://raw.githubusercontent.com/kittykatattack/learningPixi/master/examples/images/cat.png"
        />
      </>
    );
  }
}
