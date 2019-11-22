import React from 'react';

import { obstacles } from '../../../board.config';
import { Collision } from '../../helpers/collision.helper';
import { Sprite } from '@inlet/react-pixi';

enum Directions {
  X = 'x',
  Y = 'y',
}

export class Quirk extends React.Component {
  public state = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
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
    this.move(Directions.X, this.state.x - value);
  };

  public moveUp = (value: number = 25) => {
    this.move(Directions.Y, this.state.y - value);
  };

  public moveDown = (value: number = 25) => {
    this.move(Directions.Y, this.state.y + value);
  };

  public moveRight = (value: number = 25) => {
    this.move(Directions.X, this.state.x + value);
  };

  private move(direction: Directions, coordValue: number) {
    if (!this.canMove(direction, coordValue)) {
      return;
    }

    this.movementsToState[direction](coordValue);
  }

  private canMove(direction: Directions, value: number) {
    let obstacleFound = false;
    const quirckPosition = { ...this.state };
    quirckPosition[direction] = value;

    obstacles.forEach(obstacle => {
      if (Collision.hitTestRectangle({ ...quirckPosition }, { ...obstacle })) {
        obstacleFound = true;
      }
    });

    console.log(obstacleFound);

    return !obstacleFound;
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
