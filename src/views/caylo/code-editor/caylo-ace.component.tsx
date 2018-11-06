import * as React from 'react';
import * as ace from 'ace-builds';
import config from '../config';
import { EditorProps } from './types';

import './code-editor.css';

import 'ace-builds/webpack-resolver';
import { withContextAsProps } from '../with-context.hoc';
import CodeEditorContext from './code-editor.context';

class CayloAce extends React.Component<{
  baseClass?: string;
  editorProps?: EditorProps;
}> {
  private elem: React.RefObject<HTMLDivElement>;
  private aceInstance: ace.Ace.Editor;

  public constructor(props: any) {
    super(props);
    this.elem = React.createRef();
  }

  public componentDidMount() {
    this.aceInstance = ace.edit(
      this.elem.current as HTMLDivElement,
      this.validProps() as ace.Ace.EditorOptions,
    );
  }

  public componentDidUpdate() {
    this.aceInstance.setOptions(this.validProps());
  }

  public componentWillUnmount() {
    this.aceInstance.destroy();
  }

  private validProps() {
    const valid: EditorProps = {
      ...config.editor.defaultProps,
      ...this.props.editorProps,
    };
    valid.theme = `${config.editor.paths.theme}/${valid.theme}`;
    valid.fontSize = parseInt(valid.fontSize as string, 10);
    valid.tabSize = parseInt((valid.tabSize as unknown) as string, 10);

    return valid;
  }

  public render() {
    return (
      <div className={`${this.props.baseClass}__instance`} ref={this.elem} />
    );
  }
}

export default (withContextAsProps(
  CayloAce,
  CodeEditorContext,
) as unknown) as typeof CayloAce;
