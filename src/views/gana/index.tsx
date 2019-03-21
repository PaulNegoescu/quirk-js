import * as React from 'react';
import CodeEditor from './code-editor';
import Layout from './layouts/bootstrap';
import GameRunner from './game-runner';

const Gana = () => (
  <Layout title="Gana" left={<CodeEditor />} right={<GameRunner />} />
);

export default Gana;
