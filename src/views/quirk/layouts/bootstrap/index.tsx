import * as React from 'react';

const Layout = ({
  title,
  primary,
  secondary,
  output,
}: {
  title: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  output: React.ReactNode;
}): React.ReactElement<{}> => (
  <div className="quirk-app container-fluid">
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        {title}
      </a>
    </nav>
    <div className="row">
      <div className="col-lg">{primary}</div>
      <div className="col-lg">{secondary}</div>
    </div>
    <div className="row">
      <div className="col-lg"></div>
    </div>
    <div>{output}</div>
  </div>
);

export default Layout;
