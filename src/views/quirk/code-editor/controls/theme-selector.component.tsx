import * as React from 'react';
import config from '../../../../shared/config';

export default class ThemeSelector extends React.Component<{
  theme: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}> {
  public constructor(props: any) {
    super(props);
  }

  private renderThemeOptions(possibleThemes: { [key: string]: string }) {
    return Object.keys(possibleThemes).map(option => (
      <option value={option} key={option}>
        {possibleThemes[option]}
      </option>
    ));
  }

  public render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="ace-theme-select">
            Color Theme
          </label>
        </div>
        <select
          name="theme"
          onChange={this.props.handleChange}
          value={this.props.theme}
          className="custom-select"
          id="ace-theme-select"
        >
          <optgroup label="Light Themes">
            {this.renderThemeOptions(config.editor.possibleThemesLight)}
          </optgroup>
          <optgroup label="Dark Themes">
            {this.renderThemeOptions(config.editor.possibleThemesDark)}
          </optgroup>
        </select>
      </div>
    );
  }
}
