import * as React from 'react';
import CodeEditor from './code-editor';

export default class Caylo extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Caylo
          </a>
        </nav>
        <div className="row">
          <div className="col-lg">
            <CodeEditor />
          </div>
          <div className="col-lg" />
          {/*   <Runner />
          </div> */}
        </div>
      </>
    );
  }
}