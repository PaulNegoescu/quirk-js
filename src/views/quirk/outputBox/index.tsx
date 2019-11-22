import React from 'react';
import './outputBox.css';

class OutputBox extends React.Component<any> {
  errMsg: any;
  public constructor(props: { errMsg: any }) {
    super(props);
    this.errMsg = null;
  }

  public render() {
    const className = `col-md-12 OutputBox ${
      this.props.errMsg ? 'show' : 'hide'
    }`;

    return (
      <div className={className}>
        <div className="row">
          <h4>
            Drats! That's way too smart for me! Can you dumb it down a bit for
            me, please?
          </h4>
        </div>
        <div className="row">
          <h5>Namely:</h5>
          <span>{this.props.errMsg.message}</span>
        </div>
      </div>
    );
  }
}

export default OutputBox;
