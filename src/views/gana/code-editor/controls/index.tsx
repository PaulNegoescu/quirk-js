import * as React from 'react';
import config from '../../config';

import ThemeSelector from './theme-selector.component';
import FontSizeSelector from './font-size-selector.component';
import TabSizeSelector from './tab-size-selector.component';
import { ICodeEditorContext } from '../types';

interface ICodeEditorControlState {
  theme?: string;
  fontSize?: string;
  tabSize?: any;
}

class CodeEditorControls extends React.Component<
  ICodeEditorContext,
  ICodeEditorControlState
> {
  private settings = ['theme', 'fontSize', 'tabSize'];

  public constructor(props: any) {
    super(props);

    this.state = {};
    this.reloadStateFromCache();
    this.props.onConfigurationChange &&
      this.props.onConfigurationChange(this.state);

    this.handleConfigurationChange = this.handleConfigurationChange.bind(this);
  }

  private handleConfigurationChange(e: React.FormEvent<HTMLSelectElement>) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [key]: value });
    localStorage.setItem(
      `${config.editor.localStorageKey}-setting-${key}`,
      value,
    );

    this.props.onConfigurationChange &&
      this.props.onConfigurationChange(key, value);
  }

  private reloadStateFromCache() {
    this.settings.forEach(setting => {
      this.state[setting] =
        localStorage.getItem(
          `${config.editor.localStorageKey}-setting-${setting}`,
        ) ||
        this.props[setting] ||
        config.editor.defaultProps[setting];
    });
  }

  public render() {
    return (
      <div className={`${this.props.baseClass}__controls form-row`}>
        <div className="col-xl">
          <ThemeSelector
            handleChange={this.handleConfigurationChange}
            theme={this.state.theme as string}
          />
        </div>
        <div className="col-xs">
          <FontSizeSelector
            handleChange={this.handleConfigurationChange}
            fontSize={this.state.fontSize as string}
          />
        </div>
        <div className="col-xs">
          <TabSizeSelector
            handleChange={this.handleConfigurationChange}
            tabSize={this.state.tabSize as string}
          />
        </div>
      </div>
    );
  }
}

export default CodeEditorControls;
