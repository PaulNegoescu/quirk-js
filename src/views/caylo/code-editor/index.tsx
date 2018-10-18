import * as React from 'react';
import CayloAce from './caylo-ace.component';
import Controls from './controls';
import config from '../config';
import { AceProps } from './types';

export default class CodeEditor extends React.Component<{}, AceProps> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      theme: config.editor.defaultTheme,
    };

    this.onConfigurationChange = this.onConfigurationChange.bind(this);
  }

  private onConfigurationChange(conf: AceProps): void;
  private onConfigurationChange(conf: string, value?: string): void;
  private onConfigurationChange(conf: string | AceProps, value?: string) {
    if (typeof conf === 'string') {
      this.setState({ [conf]: value });
      return;
    }
    this.setState({ ...this.state, ...conf });
  }

  public render() {
    const baseClass = config.editor.className;
    return (
      <>
        <div
          className={
            baseClass +
            'btn-toolbar justify-content-between bg-dark border-bottom border-light mt-2'
          }
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <Controls
            baseClass={baseClass}
            onConfigurationChange={this.onConfigurationChange}
          />
        </div>
        <div className="border border-dark">
          <CayloAce baseClass={baseClass} aceConfig={this.state} />
        </div>
      </>
    );
  }
}
