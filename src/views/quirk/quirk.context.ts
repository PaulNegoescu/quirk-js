import * as React from 'react';
import { IQuirkContext } from '../../shared/types';

const QuirkContext = React.createContext<any>({
  editorProps: {},
  // tslint:disable-next-line: no-empty
  onConfigurationChange: () => {},
});

export default QuirkContext;
