import * as React from 'react';
import CodeEditor from './code-editor';
import Layout from './layouts/bootstrap';
import GameRunner from './game-runner';
import OutputBox from './outputBox';

const Quirk = () => (
  <Layout
    title="Quirk JS"
    primary={<CodeEditor />}
    secondary={<GameRunner />}
    output={<OutputBox />}
  />
);

export default Quirk;
