import React from 'react';
import './outputBox.css';

class OutputBox extends React.Component<{}> {
  container: {
    content: Error;
  };
  hasError: Boolean;
  public constructor(props: {}) {
    super(props);
    this.container = {
      content: new Error('something wrong happened!'),
    };
    this.hasError = false;
  }

  public displayError(error: Error) {
    this.container.content = error;
  }

  public render() {
    return <div>{this.container.content.message}</div>;
  }
}

export default OutputBox;
