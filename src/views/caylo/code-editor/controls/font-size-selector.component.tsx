import * as React from 'react';

export default class FontSizeSelector extends React.Component<{
  fontSize: string;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}> {
  public constructor(props: any) {
    super(props);
  }

  private renderSizeOptions() {
    const possibleSizes: number[] = [];

    for (let size = 8, increment = 1; size <= 72; size += increment) {
      possibleSizes.push(size);
      switch (size) {
        case 12:
          increment = 2;
          break;
        case 28:
          increment = 8;
          break;
        case 36:
          increment = 12;
          break;
        case 48:
          increment = 24;
          break;
      }
    }

    return possibleSizes.map(option => (
      <option value={option} key={option}>
        {option} px
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
