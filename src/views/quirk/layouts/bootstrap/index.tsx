import * as React from 'react';

const Layout = ({
  title,
  left,
  right,
}: {
  title: React.ReactNode;
  left: React.ReactNode;
  right?: React.ReactNode;
}): React.ReactElement<{}> => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        {title}
      </a>
    </nav>
    <div className="row">
      <div className="col-lg">{left}</div>
      <div className="col-lg">{right}</div>
    </div>
  </>
);

export default Layout;
