import * as React from 'react';
import { IQuirkContext } from './types';

const QuirkContext = React.createContext<IQuirkContext>({
  editorProps: {},
  // tslint:disable-next-line: no-empty
  onConfigurationChange: () => {},
});

export default QuirkContext;
