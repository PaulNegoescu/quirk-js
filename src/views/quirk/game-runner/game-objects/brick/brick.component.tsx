import { Sprite } from '@inlet/react-pixi';
import React from 'react';

export function Brick(props: any) {
  return (
    <Sprite
      {...props}
      image="https://img.pngio.com/brick-wall-png-vector-psd-and-clipart-with-transparent-brick-wall-png-260_261.png"
    />
  );
}
