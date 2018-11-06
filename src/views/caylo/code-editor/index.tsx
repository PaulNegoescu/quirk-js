import * as React from 'react';
import CayloAce from './caylo-ace.component';
import Controls from './controls';
import config from '../config';
import { EditorProps } from './types';
import CodeEditorContext from './code-editor.context';

export default class CodeEditor extends React.Component<{}, EditorProps> {
  public constructor(props: {}) {
    super(props);
    this.state = {};

    this.onConfigurationChange = this.onConfigurationChange.bind(this);
  }

  private onConfigurationChange(conf: EditorProps): void;
  private onConfigurationChange(conf: string, value?: string): void;
  private onConfigurationChange(conf: string | EditorProps, value?: string) {
    if (typeof conf === 'string') {
      this.setState({ [conf]: value });
      return;
    }
    this.setState({ ...this.state, ...conf });
  }

  public render() {
    return (
      <CodeEditorContext.Provider
        value={{
          baseClass: config.editor.className,
          editorProps: this.state,
          onConfigurationChange: this.onConfigurationChange,
        }}
      >
        <div
          className={
            config.editor.className +
            'btn-toolbar justify-content-between bg-dark border-bottom border-light mt-2'
          }
          role="toolbar"
          aria-label="Code Editor Toolbar"
        >
          <Controls />
        </div>
        <div className="border border-dark">
          <CayloAce />
        </div>
      </CodeEditorContext.Provider>
    );
  }
}
