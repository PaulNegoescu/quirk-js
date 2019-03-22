import * as React from 'react';
import CodeEditor from './code-editor';
import Layout from './layouts/bootstrap';
import GameRunner from './game-runner';

const Quirk = () => (
  <Layout title="Quirk JS" left={<CodeEditor />} right={<GameRunner />} />
);

export default Quirk;
