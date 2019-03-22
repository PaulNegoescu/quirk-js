import * as React from 'react';
import * as PIXI from 'pixi.js';

interface IRenderer {
  canvas: React.RefObject<HTMLCanvasElement>;
}

class Renderer extends React.Component<IRenderer> {
  private app: PIXI.Application;
  private canvas = this.props.canvas.current as HTMLCanvasElement;

  public constructor(props: IRenderer) {
    super(props);
    this.onResize = this.onResize.bind(this);
  }

  public componentDidMount() {
    this.app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio,
      view: this.canvas,
    });

    window.addEventListener('resize', this.onResize);

    // tslint:disable
    console.log(this.app);
  }

  private onResize() {
    const parent = this.canvas.parentNode as HTMLElement;
    this.app.renderer.resize(parent.clientWidth, parent.clientHeight);
  }

  public render() {
    return null;
  }
}

export default Renderer;
