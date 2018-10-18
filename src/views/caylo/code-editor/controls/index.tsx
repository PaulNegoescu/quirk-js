import * as React from 'react';
import config from '../../config';
import ThemeSelector from './theme-selector';
import { AceProps } from '../types';

interface ICodeEditorControlProps {
  baseClass?: string;
  onConfigurationChange?: (conf: string | AceProps, value?: string) => void;
}

interface ICodeEditorControlState {
  theme?: string;
}

export default class CodeEditorControls extends React.Component<
  ICodeEditorControlProps,
  ICodeEditorControlState
> {
  private settings = ['theme'];

  public constructor(props: any) {
    super(props);

    this.state = {};
    this.reloadStateFromCache();
    this.emitConfigurationChange(this.state);

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

    this.emitConfigurationChange(key, value);
  }

  private emitConfigurationChange(conf: AceProps): void;
  private emitConfigurationChange(conf: string, value: string): void;
  private emitConfigurationChange(conf: string | AceProps, value?: string) {
    if (!this.props.onConfigurationChange) {
      return;
    }
    if (typeof conf === 'string') {
      this.props.onConfigurationChange(conf, value);
      return;
    }
    this.props.onConfigurationChange(conf);
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
        <div className="col-md">
          <ThemeSelector
            handleChange={this.handleConfigurationChange}
            theme={this.state.theme as string}
          />
        </div>
      </div>
    );
  }
}
