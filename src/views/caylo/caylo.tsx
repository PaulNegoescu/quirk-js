import * as React from 'react'
import CodeEditor from './code-editor'

export default class Caylo extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Caylo</h1>
        <CodeEditor />
      </div>
    )
  }
}
