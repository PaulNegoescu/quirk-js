import * as React from 'react';
import Gana from '../views/gana';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="gana-app container-fluid">
        <Gana />
      </div>
    );
  }
}

export default App;
