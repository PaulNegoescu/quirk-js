import * as React from 'react';
import Ace from './ace.component';
import Controls from './controls';
import config from '../config';
import { EditorProps } from './types';

export default class CodeEditor extends React.Component<{}, EditorProps> {
  private editorContext = {
    baseClass: config.editor.className,
    editorProps: this.state,
    onConfigurationChange: this.onConfigurationChange.bind(this),
  };

  public constructor(props: {}) {
    super(props);
    this.state = {};
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
      <>
        <div
          className={
            config.editor.className +
            'btn-toolbar justify-content-between bg-dark border-bottom border-light mt-2'
          }
          role="toolbar"
          aria-label="Code Editor Toolbar"
        >
          <Controls {...this.editorContext} />
        </div>
        <div className="border border-dark">
          <Ace {...this.editorContext} />
        </div>
      </>
    );
  }
}
