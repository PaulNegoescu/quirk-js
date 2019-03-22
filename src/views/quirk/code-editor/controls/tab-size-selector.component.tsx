import * as React from 'react';

export default class TabSizeSelector extends React.Component<{
  tabSize: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}> {
  public constructor(props: any) {
    super(props);
  }

  private renderSizeOptions() {
    const possibleSizes = [2, 4, 8];

    return possibleSizes.map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
  }

  public render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="ace-tab-size-select">
            Tab Size
          </label>
        </div>
        <select
          name="tabSize"
          onChange={this.props.handleChange}
          value={this.props.tabSize}
          className="custom-select"
          id="ace-tab-size-select"
        >
          {this.renderSizeOptions()}
        </select>
      </div>
    );
  }
}
