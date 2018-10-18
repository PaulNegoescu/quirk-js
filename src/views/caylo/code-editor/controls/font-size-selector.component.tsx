import * as React from 'react';

export default class FontSizeSelector extends React.Component<{
  fontSize: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}> {
  public constructor(props: any) {
    super(props);
  }

  private renderSizeOptions() {
    const possibleSizes = [
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      36,
      48,
      72,
    ];

    return possibleSizes.map(option => (
      <option value={option} key={option}>
        {option}
        px
      </option>
    ));
  }

  public render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="ace-font-size-select">
            Font Size
          </label>
        </div>
        <select
          name="fontSize"
          onChange={this.props.handleChange}
          value={this.props.fontSize}
          className="custom-select"
          id="ace-font-size-select"
        >
          {this.renderSizeOptions()}
        </select>
      </div>
    );
  }
}
