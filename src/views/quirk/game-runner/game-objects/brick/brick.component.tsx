import { Sprite } from '@inlet/react-pixi';
import React from 'react';

export function Brick(props: any) {
  return (
    <Sprite
      {...props}
      width={50}
      height={50}
      image="https://img.pngio.com/brick-wall-png-vector-psd-and-clipart-with-transparent-brick-wall-png-260_261.png"
    />
  );
}
