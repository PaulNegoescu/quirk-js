import * as React from 'react';
import Caylo from '../views/caylo';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="caylo-app container-fluid">
        <Caylo />
      </div>
    );
  }
}

export default App;
