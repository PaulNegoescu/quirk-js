import React, { useState } from 'react';
import CodeEditor from './code-editor';
import Layout from './layouts/bootstrap';
import GameRunner from './game-runner';
import OutputBox from './outputBox';

const Quirk = () => {
  const [errorMessage, setErrorMessage]: [any, any] = useState('');

  const errorOut = (err: Error) => {
    setErrorMessage(err);
  };

  return (
    <Layout
      title="Quirk JS"
      primary={<CodeEditor errorOut={errorOut} />}
      secondary={<GameRunner />}
      output={<OutputBox errMsg={errorMessage} />}
    />
  );
};

export default Quirk;
